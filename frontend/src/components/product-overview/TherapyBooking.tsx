'use client';

import { useState } from 'react';
import { formatCOP } from '@/helpers/currency';

export interface TherapyProduct {
  id: number;
  name: string;
  price: number;
  duration: string;
  therapist: string;
  isTherapyProduct: boolean;
}

interface TherapyBookingProps {
  product: TherapyProduct;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

export function TherapyBooking({ product }: TherapyBookingProps) {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('presencial');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Generar fechas disponibles (próximos 14 días)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      // Excluir domingos
      if (date.getDay() !== 0) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
        });
      }
    }

    return dates;
  };

  // Horarios disponibles
  const availableTimeSlots: TimeSlot[] = [
    { time: '09:00', available: true },
    { time: '10:00', available: true },
    { time: '11:00', available: false },
    { time: '12:00', available: true },
    { time: '14:00', available: true },
    { time: '15:00', available: true },
    { time: '16:00', available: false },
    { time: '17:00', available: true },
    { time: '18:00', available: true },
    { time: '19:00', available: true },
  ];

  const sessionTypes = [
    {
      id: 'presencial',
      name: 'Presencial',
      description: 'Sesión en nuestro centro de bienestar',
    },
    {
      id: 'online',
      name: 'Online',
      description: 'Sesión por videollamada desde casa',
    },
    {
      id: 'domicilio',
      name: 'A domicilio',
      description: 'Sesión en tu hogar (+$30)',
    },
  ];

  const handleBooking = () => {
    if (
      !selectedDate ||
      !selectedTime ||
      !bookingData.name ||
      !bookingData.email
    ) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    console.log('Reserva realizada:', {
      product: product.name,
      date: selectedDate,
      time: selectedTime,
      type: selectedType,
      client: bookingData,
    });

    alert(
      '¡Reserva realizada con éxito! Te contactaremos pronto para confirmar.'
    );
    setShowBookingForm(false);
    // Aquí iría la lógica para enviar la reserva
  };

  const availableDates = getAvailableDates();

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-bold text-gray-900">
          Reservar Sesión
        </h2>
        <p className="text-gray-600">
          Agenda tu sesión de {product.name} con {product.therapist}
        </p>
      </div>

      {!showBookingForm ? (
        <div className="space-y-6">
          {/* Información de la sesión */}
          <div className="from-secundario to-terciario rounded-lg bg-gradient-to-r p-6 text-white">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="text-center">
                <div className="text-2xl font-bold">{product.duration}</div>
                <div className="text-principal text-sm">Duración</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{formatCOP(product.price)}</div>
                <div className="text-principal text-sm">Precio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">🏆</div>
                <div className="text-principal text-sm">Certificado</div>
              </div>
            </div>
          </div>

          {/* Tipo de sesión */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Tipo de sesión</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {sessionTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`rounded-lg border-2 p-4 transition-all ${
                    selectedType === type.id
                      ? 'border-secundario bg-secundario bg-opacity-10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">
                      {type.name}
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      {type.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Selección de fecha */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Fecha disponible</h3>
            <div className="grid max-h-60 grid-cols-1 gap-2 overflow-y-auto md:grid-cols-2">
              {availableDates.map(date => (
                <button
                  key={date.value}
                  onClick={() => setSelectedDate(date.value)}
                  className={`rounded-lg border p-3 text-left transition-all ${
                    selectedDate === date.value
                      ? 'border-secundario bg-secundario bg-opacity-10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium text-gray-900">{date.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Selección de hora */}
          {selectedDate && (
            <div>
              <h3 className="mb-4 text-lg font-semibold">Hora disponible</h3>
              <div className="grid grid-cols-3 gap-2 md:grid-cols-5">
                {availableTimeSlots.map(slot => (
                  <button
                    key={slot.time}
                    onClick={() => slot.available && setSelectedTime(slot.time)}
                    disabled={!slot.available}
                    className={`rounded-lg border p-3 text-center transition-all ${
                      !slot.available
                        ? 'cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400'
                        : selectedTime === slot.time
                          ? 'border-secundario bg-secundario bg-opacity-10 text-secundario'
                          : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Botón para continuar */}
          <button
            onClick={() => setShowBookingForm(true)}
            disabled={!selectedDate || !selectedTime}
            className={`w-full rounded-full py-4 font-medium transition-colors ${
              selectedDate && selectedTime
                ? 'from-secundario to-terciario hover:from-terciario hover:to-secundario bg-gradient-to-br text-white hover:bg-gradient-to-br'
                : 'cursor-not-allowed bg-gray-300 text-gray-500'
            }`}
          >
            Continuar con la reserva
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Resumen de la reserva */}
          <div className="rounded-lg bg-gray-50 p-4">
            <h3 className="mb-3 font-semibold">Resumen de tu reserva</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Sesión:</span>
                <span className="font-medium">{product.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Fecha:</span>
                <span className="font-medium">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span>Hora:</span>
                <span className="font-medium">{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span>Tipo:</span>
                <span className="font-medium">
                  {sessionTypes.find(t => t.id === selectedType)?.name}
                </span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>
                  {formatCOP(
                    selectedType === 'domicilio'
                      ? product.price + 30
                      : product.price
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Formulario de datos */}
          <div className="space-y-4">
            <h3 className="font-semibold">Tus datos</h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Nombre completo *"
                value={bookingData.name}
                onChange={e =>
                  setBookingData({ ...bookingData, name: e.target.value })
                }
                className="focus:ring-secundario rounded-lg border border-gray-300 p-3 focus:ring-2 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email *"
                value={bookingData.email}
                onChange={e =>
                  setBookingData({ ...bookingData, email: e.target.value })
                }
                className="focus:ring-secundario rounded-lg border border-gray-300 p-3 focus:ring-2 focus:outline-none"
              />
            </div>

            <input
              type="tel"
              placeholder="Teléfono"
              value={bookingData.phone}
              onChange={e =>
                setBookingData({ ...bookingData, phone: e.target.value })
              }
              className="focus:ring-secundario w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:outline-none"
            />

            <textarea
              placeholder="Mensaje adicional o consultas"
              value={bookingData.message}
              onChange={e =>
                setBookingData({ ...bookingData, message: e.target.value })
              }
              rows={4}
              className="focus:ring-secundario w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:outline-none"
            />
          </div>

          {/* Botones */}
          <div className="flex space-x-4">
            <button
              onClick={() => setShowBookingForm(false)}
              className="flex-1 rounded-full border border-gray-300 py-3 transition-colors hover:bg-gray-50"
            >
              Volver
            </button>
            <button
              onClick={handleBooking}
              className="from-secundario to-terciario hover:from-terciario hover:to-secundario flex-1 rounded-full bg-gradient-to-br py-3 text-white transition-all hover:bg-gradient-to-br"
            >
              Confirmar Reserva
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

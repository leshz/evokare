'use client';

import { useState } from 'react';

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
    message: ''
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
            day: 'numeric'
          })
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
    { time: '19:00', available: true }
  ];

  const sessionTypes = [
    { id: 'presencial', name: 'Presencial', description: 'Sesión en nuestro centro de bienestar' },
    { id: 'online', name: 'Online', description: 'Sesión por videollamada desde casa' },
    { id: 'domicilio', name: 'A domicilio', description: 'Sesión en tu hogar (+$30)' }
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !bookingData.name || !bookingData.email) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    console.log('Reserva realizada:', {
      product: product.name,
      date: selectedDate,
      time: selectedTime,
      type: selectedType,
      client: bookingData
    });

    alert('¡Reserva realizada con éxito! Te contactaremos pronto para confirmar.');
    setShowBookingForm(false);
    // Aquí iría la lógica para enviar la reserva
  };

  const availableDates = getAvailableDates();

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Reservar Sesión</h2>
        <p className="text-gray-600">
          Agenda tu sesión de {product.name} con {product.therapist}
        </p>
      </div>

      {!showBookingForm ? (
        <div className="space-y-6">
          {/* Información de la sesión */}
          <div className="bg-gradient-to-r from-secundario to-terciario rounded-lg p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">{product.duration}</div>
                <div className="text-sm text-principal">Duración</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">${product.price}</div>
                <div className="text-sm text-principal">Precio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">🏆</div>
                <div className="text-sm text-principal">Certificado</div>
              </div>
            </div>
          </div>

          {/* Tipo de sesión */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tipo de sesión</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sessionTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${selectedType === type.id
                      ? 'border-secundario bg-secundario bg-opacity-10'
                      : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{type.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{type.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Selección de fecha */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Fecha disponible</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-60 overflow-y-auto">
              {availableDates.map((date) => (
                <button
                  key={date.value}
                  onClick={() => setSelectedDate(date.value)}
                  className={`p-3 rounded-lg border text-left transition-all ${selectedDate === date.value
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
              <h3 className="text-lg font-semibold mb-4">Hora disponible</h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                {availableTimeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => slot.available && setSelectedTime(slot.time)}
                    disabled={!slot.available}
                    className={`p-3 rounded-lg border text-center transition-all ${!slot.available
                        ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
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
            className={`w-full py-4 rounded-full font-medium transition-colors ${selectedDate && selectedTime
                ? 'bg-secundario text-white hover:bg-terciario'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
          >
            Continuar con la reserva
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Resumen de la reserva */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-3">Resumen de tu reserva</h3>
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
                <span className="font-medium">{sessionTypes.find(t => t.id === selectedType)?.name}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${selectedType === 'domicilio' ? product.price + 30 : product.price}</span>
              </div>
            </div>
          </div>

          {/* Formulario de datos */}
          <div className="space-y-4">
            <h3 className="font-semibold">Tus datos</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre completo *"
                value={bookingData.name}
                onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secundario"
              />
              <input
                type="email"
                placeholder="Email *"
                value={bookingData.email}
                onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secundario"
              />
            </div>

            <input
              type="tel"
              placeholder="Teléfono"
              value={bookingData.phone}
              onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secundario"
            />

            <textarea
              placeholder="Mensaje adicional o consultas"
              value={bookingData.message}
              onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secundario"
            />
          </div>

          {/* Botones */}
          <div className="flex space-x-4">
            <button
              onClick={() => setShowBookingForm(false)}
              className="flex-1 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            >
              Volver
            </button>
            <button
              onClick={handleBooking}
              className="flex-1 py-3 bg-secundario text-white rounded-full hover:bg-terciario transition-colors"
            >
              Confirmar Reserva
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 
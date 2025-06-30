const CONTACT_INFO = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75v2.25m0 0A3.75 3.75 0 0 1 20.25 9.75c0 7.5-4.5 10.5-8.25 10.5S3.75 17.25 3.75 9.75A3.75 3.75 0 0 1 7.5 6V3.75" /></svg>
    ),
    text: "KLLG St, No.99, Pku City, ID 28289",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25ZM6.75 8.25h10.5" /></svg>
    ),
    text: "www.helldodomainsite.com",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 17.25V6.75ZM6.75 8.25h10.5" /></svg>
    ),
    text: "0761-8523-398",
  },
];

export const ContactInfo = () => {
  return (
    <div className="space-y-2 mb-8">
      {CONTACT_INFO.map((info, i) => (
        <div key={i} className="flex items-center space-x-3 text-gray-600">
          <span className="text-secundario">{info.icon}</span>
          <span>{info.text}</span>
        </div>
      ))}
    </div>
  );
}; 
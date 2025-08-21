const ContactPanel = ({ onClose }) => {
  return (
    <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white p-6 shadow-xl z-50 transition-transform duration-300">
      <button onClick={onClose} className="absolute top-4 right-4 text-sky font-bold">✕</button>
      <h2 className="text-lg font-pangaia font-semibold text-peach mb-4">Neem contact met mij op</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Naam" className="font-nunito w-full border rounded px-4 py-2" />
        <input type="email" placeholder="Email" className="font-nunito w-full border rounded px-4 py-2" />
        <textarea placeholder="Bericht" className="font-nunito w-full border rounded px-4 py-2" rows="5" />
        <button type="submit" className="font-nunito bg-sky text-white rounded px-4 py-2 font-semibold">
          Verstuur
        </button>
      </form>
    </div>
  );
};

export default ContactPanel;
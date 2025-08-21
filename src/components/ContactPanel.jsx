const ContactPanel = ({ onClose }) => {
  return (
    <div className="fixed inset-y-0 right-0 max-w-md w-full bg-myBlue p-6 shadow-xl z-50 transition-transform duration-300">
      <button onClick={onClose} className="absolute top-4 right-4 cursor-pointer text-white font-bold">✕</button>
      <h2 className="text-lg font-myHeader text-white mb-4">Contact me</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="font-myText text-myDark w-full bg-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-myDark" />
        <input type="email" placeholder="Email" className="font-myText text-myDark w-full bg-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-myDark" />
        <textarea placeholder="Message" className="font-myText text-myDark w-full bg-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-myDark" rows="5" />
        <button type="submit" className="font-myText font-bold cursor-pointer text-white bg-myDark p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPanel;
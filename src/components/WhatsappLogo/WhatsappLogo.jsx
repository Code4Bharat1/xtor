// const WhatsappLogo = () =>{
//     return (
//         <div 
//         className="fixed md:h-20 md:w-20 h-16 w-16 object-cover 2xl:bottom-30 2xl:right-10 xl:right-10 xl:bottom-15 lg:bottom-20 lg:right-10 right-10 bottom-15  z-50">
//             <a
//             href="https://web.whatsapp.com"
//             target="_black"
//             // rel="noopener noreferrer"
            
//             >

            
//             <img
//             src="whatsapp.png"
//             alt="whatsApp_Logo"
//             />
//             </a>
//         </div>
//     )
// }

// export default WhatsappLogo;

const WhatsappLogo = () => {
  const phoneNumber = "919619561695"; // +91-9619561695

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 lg:right-8 z-[9999] md:h-14 md:w-14 h-12 w-12 hover:scale-110 transition-transform duration-300">
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp Logo"
          className="w-full h-full object-cover drop-shadow-lg"
        />
      </a>
    </div>
  );
};

export default WhatsappLogo;

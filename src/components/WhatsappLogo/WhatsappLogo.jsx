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
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
      <div className="max-w-[1100px] mx-auto w-full h-full relative">
        <div className="absolute pointer-events-auto md:h-14 md:w-14 h-12 w-12 
          bottom-[84px] right-0">
          
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/whatsapp.png"
              alt="WhatsApp Logo"
              className="w-full h-full object-cover"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsappLogo;



const Footer = () => {
  return (
    <footer className=" lg:mt-32 py-14 bg-white/30 font-[Manrope]  ">
      <div className=" mx-auto text-center px-4">
        <h2 className="text-2xl font-bold mb-4 font-['Manrope']  ">Join Our Newsletter</h2>
        <p className="text-gray-600 mb-6">
          As a leading creative agency, we specialize in crafting innovative
          solutions that elevate your brand and captivate your audience. Our
          team of talented designers, strategists, and story.
        </p>
        <div className="flex justify-center mb-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-l-lg py-2 px-4 w-1/2"
          />
          <button className="iconBg text-white rounded-r-lg py-2 px-6">
            Subscribe
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          <div>
            <h3 className="text-lg font-bold mb-2">
              Agrey 
            </h3>
            <p className="text-gray-500">
              Where creativity meets strategy to transform your brand's vision
              into reality. As a leading creative agency, we specialize in
              crafting innovative solutions that elevate your brand and
              captivate your audience.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Product</h3>
            <ul className="text-gray-500 space-y-2">
              <li>Employee database</li>
              <li>Absences</li>
              <li>Time tracking</li>
              <li>Shift planner</li>
              <li>Recruiting</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Information</h3>
            <ul className="text-gray-500 space-y-2">
              <li>FAQ</li>
              <li>Blog</li>
              <li>Support</li>
              <li>Help</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <ul className="text-gray-500 space-y-2">
              <li>About us</li>
              <li>Careers</li>
              <li>Contact us</li>
              <li>Features</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p className="text-gray-600">
            © Digital Agency Website 2024. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Terms</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Cookies</a>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

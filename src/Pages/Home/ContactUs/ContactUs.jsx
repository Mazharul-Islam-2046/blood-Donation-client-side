

const ContactUs = () => {
 

    return (
        <div id="contactme" className="flex flex-col py-8 items-center border-2 rounded-md border-gray-900">
            <h2 className="text-3xl md:text-4xl text-orange-400 font-secondary font-bold mt-8 uppercase">Contact Me</h2>
            <form
                className="flex flex-col w-[70vw] max-w-4xl md:w-[50vw] text-lg md:text-2xl px-2  md:px-28 py-20 font-primary"
                action="https://formspree.io/f/xwkdgynp"
                method="POST"
            >
                
                    <input className="pt-2 pb-3 px-4 mb-14 outline-none border-b-2 border-gray-700"type="email" name="email" placeholder="Email"/>
                    <textarea className="pt-3 px-4 mb-14 outline-none border-b-2 border-gray-700" name="message" placeholder="Message"></textarea>
                
                <button className="bg-orange-300 rounded-md text-white py-3 hover:text-gray-800 hover:bg-white border-gray-800 hover:border-2" type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactUs;

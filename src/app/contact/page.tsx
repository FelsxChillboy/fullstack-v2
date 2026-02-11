export const dynamic = "force-dynamic";

export default function ContactPage() {
  return (
    <main className="bg-gray-100 min-h-screen py-16">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm tracking-widest text-gray-400">CONTACT</p>
          <h1 className="text-4xl font-bold text-blue-900">
            CONTACT US
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-semibold text-blue-900">
                📍 Location:
              </h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Jl. Matraman Dalam III No.23, RT.013/RW.004,  
                Kramat, Kec. Senen, Kota Jakarta Pusat,  
                DKI Jakarta 10420
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900">
                ✉️ Email:
              </h3>
              <p className="mt-2 text-gray-700">
                rayonteknikunusia@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900">
                📞 Call:
              </h3>
              <p className="mt-2 text-gray-700">
                +62 812-9267-5810
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900">
                💬 WhatsApp:
              </h3>
              <a
                href="https://wa.me/6281292675810"
                target="_blank"
                className="mt-2 inline-block text-green-600 font-medium hover:underline"
              >
                Chat via WhatsApp
              </a>
            </div>

          </div>

          {/* RIGHT SIDE - GOOGLE MAPS */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4431638961996!2d106.85056887440972!3d-6.205125860782921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5a75d490f1b%3A0x88ddc31195a1c7f!2sSekretariat%20Rayon%20PMII%20Teknik%20Unusia!5e0!3m2!1sen!2sid!4v1770818730119!5m2!1sen!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </main>
  );
}

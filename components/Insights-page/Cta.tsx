import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className=" py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side - Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/cta-left-image.png"
              alt="Reimagine the future of CX"
              width={450}
              height={450}
              className="object-contain"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Turn customer experience into your competitive edge
            </h2>
            <div>
              <Link
                href="/hire"
                className="inline-block bg-primary-green text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
              >
                Hire Ema Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

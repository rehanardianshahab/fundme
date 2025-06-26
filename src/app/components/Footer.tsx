export default function Footer() {
  return (
    <>
      <div className="bg-[#101419] @container/main text-white">
        <div className="container-main-x py-24">
          <div className="flex @3xl/main:flex-row flex-col @3xl/main:gap-0 gap-12 justify-between @3xl/main:items-center items-start">
            <p className="text-3xl">FUNDME</p>
            <div className="flex @3xl/main:flex-row flex-col @3xl/main:gap-24 gap-12">
              <div className="w-auto @3xl/main:w-72">
                <p className="leading-[130%] @3xl/main:mb-6 mb-2">Address</p>
                <span className="text-[#ADB2B8] leading-[130%]">
                  Jl. Raya Cibiru KM 15, Bandung 40393 Jawa Barat
                </span>
              </div>
              <div>
                <p className="leading-[130%] @3xl/main:mb-6 mb-2">Contact</p>
                <span className="text-[#ADB2B8] leading-[130%]">
                  fundme@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-8 border-t-1 border-white">
          <span className="leading-[130%] @3xl/main:text-[16px] text-[10px]">
            &copy; 2022 Fund Me is supported by Knock Out | All rights reserved.
          </span>
        </div>
      </div>
    </>
  );
}

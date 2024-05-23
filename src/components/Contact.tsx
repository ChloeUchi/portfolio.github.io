

const Contact = () => {
    return (
        <div className="h-[100px] flex-col flex items-center"
            style={{
                clipPath: 'polygon(100% 0%, 0% 0% , 0.00% 93.88%, 2.00% 93.32%, 4.00% 92.43%, 6.00% 91.44%, 8.00% 90.58%, 10.00% 90.08%, 12.00% 90.05%, 14.00% 90.50%, 16.00% 91.33%, 18.00% 92.32%, 20.00% 93.23%, 22.00% 93.84%, 24.00% 93.99%, 26.00% 93.65%, 28.00% 92.90%, 30.00% 91.93%, 32.00% 90.98%, 34.00% 90.27%, 36.00% 90.00%, 38.00% 90.22%, 40.00% 90.88%, 42.00% 91.82%, 44.00% 92.80%, 46.00% 93.58%, 48.00% 93.98%, 50.00% 93.88%, 52.00% 93.32%, 54.00% 92.43%, 56.00% 91.44%, 58.00% 90.58%, 60.00% 90.08%, 62.00% 90.05%, 64.00% 90.50%, 66.00% 91.33%, 68.00% 92.32%, 70.00% 93.23%, 72.00% 93.84%, 74.00% 93.99%, 76.00% 93.65%, 78.00% 92.90%, 80.00% 91.93%, 82.00% 90.98%, 84.00% 90.27%, 86.00% 90.00%, 88.00% 90.22%, 90.00% 90.88%, 92.00% 91.82%, 94.00% 92.80%, 96.00% 93.58%, 98.00% 93.98%, 100.00% 93.88%)',
            }}>
            <div className="flex justify-around m-auto lg:w-[40%] w-[100%]">
                <a href="" className="font-bold bg-gradient-to-r from-[#f7d1d3] via-[#fdb2fe] to-[#acb5f5] text-transparent bg-clip-text lg:text-[1.4em] md:text-[1.2em] text-[1em]">Github</a>
                <a href="" className="font-bold bg-gradient-to-r from-[#f7d1d3] via-[#fdb2fe] to-[#acb5f5] text-transparent bg-clip-text lg:text-[1.4em] md:text-[1.2em] text-[1em]">Instagram</a>
                <a href="" className="font-bold bg-gradient-to-r from-[#f7d1d3] via-[#fdb2fe] to-[#acb5f5] text-transparent bg-clip-text lg:text-[1.4em] md:text-[1.2em] text-[1em]">Facebook</a>
                <a href="" className="font-bold bg-gradient-to-r from-[#f7d1d3] via-[#fdb2fe] to-[#acb5f5] text-transparent bg-clip-text lg:text-[1.4em] md:text-[1.2em] text-[1em]">Email</a>
            </div>
            {/* <p className="">Thank you!!!!</p> */}
        </div>
    )
}

export default Contact
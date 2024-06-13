import YoutubeLogo from './YoutubeLogo' 
export default function Navbar() {
    return (
        <nav className="col-start-1 col-end-3 grid grid-cols-3">
            <div className="flex flex-row items-center gap-1 pl-4">
             <YoutubeLogo height="1.8rem" width="3rem"/>
             <span>YouTube</span>
            </div>
            <div className="flex justify-center items-center">
                <input type="text" className='w-full p-2 border-solid border border-[#282828] rounded-2xl bg-transparent' placeholder='Search' />
            </div>
            <div className="flex justify-end">
                <img className="w-8 h-8 rounded-full" src="https://api.dicebear.com/8.x/identicon/svg?seed=Alejandra" alt="User" />
            </div>
        </nav>
    )
}
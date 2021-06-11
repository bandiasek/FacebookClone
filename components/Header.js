import Image from 'next/image'
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid'
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon'

function Header() {
      return (
            <div className='flex items-center sticky top-0 bg-white z-50 p-2 lg:px-5 shadow-md'>
                  {/* Left */}
                  <div className='flex items-center' >
                        <Image src='https://links.papareact.com/5me' width={40} height={40} layout='fixed' />
                        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                              <SearchIcon className='h-6 text-gray-600' />
                              <input type="text" placeholder='Search Facebook' className='hidden md:inline-table ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink'/>
                        </div>
                  </div>

                  {/* Center */}
                  <div className='flex items-center flex-grow'>
                        <div className='flex space-x-6 md:space-x-2'>
                              <HeaderIcon Icon={HomeIcon} active/>
                              <HeaderIcon Icon={FlagIcon} />
                              <HeaderIcon Icon={PlayIcon} />
                              <HeaderIcon Icon={ShoppingCartIcon} />
                              <HeaderIcon Icon={UserGroupIcon} />
                        </div>
                  </div>

                  {/* Right */}
                  <div className='flex items-center sm:space-x-2 justify-end'>
                        {/* Profile Pic */}

                        <p className='font-semibold whitespace-nowrap pr-3' >Ondrej Brendza</p>
                        <ViewGridIcon className='icon'/>
                        <ChatIcon className='icon'/>
                        <BellIcon className='icon'/>
                        <ChevronDownIcon className='icon'/>
                  </div>

            </div>
      )
}

export default Header

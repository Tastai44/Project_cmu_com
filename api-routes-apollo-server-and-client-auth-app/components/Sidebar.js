// import { useSession } from 'next-auth/react'
// import Image from 'next/image'
import SidebarRow from './SidebarRow'
import  {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
    UsersIcon

}from '@heroicons/react/solid'
import  {
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon,
    Marketplace,
    SearchIcon
}from '@heroicons/react/outline'


function Sidebar() {
    // onClick={signIn}
    // const {data: session } = useSession();

    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px">
            <SidebarRow 
            // src={session.user.image}
            src="/images/cmu_logo.png" 
            width={60} 
            height={60}
            layout="fixed"
            // title={session.user.name}
            />
            <SidebarRow Icon={UsersIcon} title="Friends"/>
            <SidebarRow Icon={UserGroupIcon} title="Groups"/>
            <SidebarRow Icon={ChevronDownIcon} title="See More"/>



        </div>
    )
}

export default Sidebar
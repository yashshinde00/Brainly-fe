
import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { CreateContentModal } from './components/CreateContentModal'
import { PlusIcons } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import { SideBar } from './components/Sidebar'

function App() {
  const [modalOpen,setModalOpen] = useState(false);
  
  return <div>
    <SideBar />
    <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false);
      }} />
      <div className='flex justify-end gap-4'>
        <Button onClick={() => {
          setModalOpen(true);
        }} variant="primary" text="Add content" startIcon ={<PlusIcons />} />
        <Button  variant="secondary" text="Share brain" startIcon={<ShareIcon />} />
      </div>
      <div className='flex gap-4'>
        <Card type='twitter'  link ="https://x.com/TouchlineX/status/1941211563110826145" title='first tweet' />
        <Card type='youtube'  link ="https://www.youtube.com/watch?v=c67tggHmQ2I" title='My Youtube Post' />
      </div>

    </div>
  </div>
}

export default App

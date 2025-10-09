import React from 'react'

const ButtonPrimary = ({ children, onClick }) => (
  <button 
    className="text-2xl w-[500px] h-[150px] bg-white rounded-md m-8 flex items-center justify-center hover:cursor-pointer hover:border-2 active:bg-gray-300 active:border-0"
    onClick={onClick}
  >
    {children}
  </button>
);
const QLBN_Select_QL = () => {
  return (
    <div className='w-full h-full bg-gray-100 p-4 flex flex-col items-center justify-center'>
        <ButtonPrimary onClick={() => setActive("patients")}>Thêm Bệnh nhân mới</ButtonPrimary>
        <ButtonPrimary>Danh sách bệnh nhân chưa khám bệnh</ButtonPrimary>
        <ButtonPrimary>Danh sách bệnh nhân đã khám bệnh</ButtonPrimary>
    </div>  
  )
}

export default QLBN_Select_QL
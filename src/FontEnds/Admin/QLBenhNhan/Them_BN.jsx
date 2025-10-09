//BUTTON
const ButtonPrimary = ({ children, onClick }) => (
  <button 
    className="text-2xl w-[500px] h-[150px] bg-white rounded-md m-8 flex items-center justify-center hover:cursor-pointer hover:bg-[#FFF9E9] active:bg-[#FFC419] active:border-0"
    onClick={onClick}
  >
    {children}
  </button>
);
//END BUTTON

// Thêm Bệnh Nhân Mới (Chưa đăng ký khám lần nào) hoặc chưa đăng ký trên web
const Them_BN = ({setContext}) => {
  return (
    <div className="px-2">
        {/* Breadcrumb */}
      <div className="text-[10px] text-gray-900 bg-white mb-2 mt-1 px-4 py-2 rounded-md">
           {/*Phần text "Quản lý bệnh nhân" được làm thành nút bấm */}
          <span 
            className="cursor-pointer text-gray-600 hover:text-gray-900" 
            onClick={() => setContext("Quản lý Bệnh Nhân")}
          >
             Quản lý Bệnh Nhân 
          </span>
          &nbsp;&gt;&nbsp; Thêm bệnh nhân mới
       </div>

        {/* Tittle */}
      <div className="flex items-center justify-between mb-2 bg-white p-4 rounded-md shadow">
        <h2>Thêm bệnh nhân mới</h2>
        <ButtonPrimary onClick={() => setContext("Quản lý Bệnh Nhân")}>
            Quay lại
        </ButtonPrimary>
      </div>
    </div>
  )
}

export default Them_BN
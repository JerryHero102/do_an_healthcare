import React, { useMemo, useState } from 'react'

const DS_KTV = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  const pageSize = 8

  const technicians = useMemo(() => ([
    { id: 'KTV001', fullName: 'Nguyễn Văn M', department: 'Xét nghiệm', phone: '0901 222 333', email: 'm.nguyen@example.com', status: 'active' },
    { id: 'KTV002', fullName: 'Trần Thị N', department: 'Chẩn đoán hình ảnh', phone: '0902 222 333', email: 'n.tran@example.com', status: 'inactive' },
    { id: 'KTV003', fullName: 'Lê Văn O', department: 'Nội soi', phone: '0903 222 333', email: 'o.le@example.com', status: 'active' },
    { id: 'KTV004', fullName: 'Phạm Thị P', department: 'Xét nghiệm', phone: '0904 222 333', email: 'p.pham@example.com', status: 'active' },
    { id: 'KTV005', fullName: 'Hoàng Văn Q', department: 'Chẩn đoán hình ảnh', phone: '0905 222 333', email: 'q.hoang@example.com', status: 'inactive' },
    { id: 'KTV006', fullName: 'Đỗ Thị R', department: 'Điện tim', phone: '0906 222 333', email: 'r.do@example.com', status: 'active' },
    { id: 'KTV007', fullName: 'Phan Văn S', department: 'Sinh hóa', phone: '0907 222 333', email: 's.phan@example.com', status: 'active' },
    { id: 'KTV008', fullName: 'Vũ Thị T', department: 'Vi sinh', phone: '0908 222 333', email: 't.vu@example.com', status: 'active' },
    { id: 'KTV009', fullName: 'Bùi Văn U', department: 'Huyết học', phone: '0909 222 333', email: 'u.bui@example.com', status: 'inactive' },
  ]), [])

  const departments = useMemo(() => {
    const values = Array.from(new Set(technicians.map(t => t.department)))
    return values.sort((a, b) => a.localeCompare(b))
  }, [technicians])

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return technicians
      .filter(t => selectedDepartment === 'all' ? true : t.department === selectedDepartment)
      .filter(t => selectedStatus === 'all' ? true : t.status === selectedStatus)
      .filter(t => !q || t.id.toLowerCase().includes(q) || t.fullName.toLowerCase().includes(q) || t.phone.toLowerCase().includes(q) || t.email.toLowerCase().includes(q))
  }, [technicians, searchQuery, selectedDepartment, selectedStatus])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const pageStartIndex = (currentPage - 1) * pageSize
  const pageItems = filtered.slice(pageStartIndex, pageStartIndex + pageSize)

  const handlePrev = () => setCurrentPage(p => Math.max(1, p - 1))
  const handleNext = () => setCurrentPage(p => Math.min(totalPages, p + 1))

  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between gap-4 flex-wrap">
        <h2 className="text-2xl font-semibold">Danh sách Kỹ thuật viên</h2>
        <button className="bg-[#FFC419] text-white px-4 py-2 rounded hover:bg-[#e6ac17] transition">+ Thêm KTV</button>
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          value={searchQuery}
          onChange={e => { setCurrentPage(1); setSearchQuery(e.target.value) }}
          placeholder="Tìm theo mã, tên, sđt, email"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]"
        />
        <select
          value={selectedDepartment}
          onChange={e => { setCurrentPage(1); setSelectedDepartment(e.target.value) }}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]"
        >
          <option value="all">Tất cả bộ phận</option>
          {departments.map(dep => <option key={dep} value={dep}>{dep}</option>)}
        </select>
        <select
          value={selectedStatus}
          onChange={e => { setCurrentPage(1); setSelectedStatus(e.target.value) }}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]"
        >
          <option value="all">Tất cả trạng thái</option>
          <option value="active">Đang hoạt động</option>
          <option value="inactive">Tạm ngưng</option>
        </select>
      </div>

      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="px-4 py-3 font-medium text-gray-600">Mã KTV</th>
              <th className="px-4 py-3 font-medium text-gray-600">Họ và tên</th>
              <th className="px-4 py-3 font-medium text-gray-600">Bộ phận</th>
              <th className="px-4 py-3 font-medium text-gray-600">Số điện thoại</th>
              <th className="px-4 py-3 font-medium text-gray-600">Email</th>
              <th className="px-4 py-3 font-medium text-gray-600">Trạng thái</th>
              <th className="px-4 py-3 font-medium text-gray-600">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.length === 0 && (
              <tr>
                <td className="px-4 py-6 text-center text-gray-500" colSpan={7}>Không có dữ liệu</td>
              </tr>
            )}
            {pageItems.map(t => (
              <tr key={t.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{t.id}</td>
                <td className="px-4 py-3">{t.fullName}</td>
                <td className="px-4 py-3">{t.department}</td>
                <td className="px-4 py-3">{t.phone}</td>
                <td className="px-4 py-3">{t.email}</td>
                <td className="px-4 py-3">
                  <span className={t.status === 'active' ? 'inline-flex items-center gap-1 text-green-700 bg-green-100 border border-green-200 px-2 py-1 rounded text-xs' : 'inline-flex items-center gap-1 text-gray-700 bg-gray-100 border border-gray-200 px-2 py-1 rounded text-xs'}>
                    <span className={t.status === 'active' ? 'h-2 w-2 rounded-full bg-green-500' : 'h-2 w-2 rounded-full bg-gray-400'} />
                    {t.status === 'active' ? 'Đang hoạt động' : 'Tạm ngưng'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 rounded border hover:bg-gray-100">Xem</button>
                    <button className="px-3 py-1 rounded border hover:bg-gray-100">Sửa</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">Hiển thị {pageItems.length > 0 ? pageStartIndex + 1 : 0}–{pageStartIndex + pageItems.length} / {filtered.length}</div>
        <div className="flex items-center gap-2">
          <button onClick={handlePrev} disabled={currentPage === 1} className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50">Trước</button>
          <span className="text-sm">Trang {currentPage}/{totalPages}</span>
          <button onClick={handleNext} disabled={currentPage === totalPages} className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50">Sau</button>
        </div>
      </div>
    </div>
  )
}

export default DS_KTV
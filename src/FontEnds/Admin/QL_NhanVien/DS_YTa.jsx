import React, { useMemo, useState } from 'react'

const DS_YTa = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedShift, setSelectedShift] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  const pageSize = 8

  const nurses = useMemo(() => ([
    { id: 'YT001', fullName: 'Nguyễn Thị A', shift: 'Sáng', phone: '0901 999 111', email: 'a.yta@example.com', status: 'active' },
    { id: 'YT002', fullName: 'Trần Văn B', shift: 'Chiều', phone: '0902 999 111', email: 'b.yta@example.com', status: 'inactive' },
    { id: 'YT003', fullName: 'Lê Thị C', shift: 'Tối', phone: '0903 999 111', email: 'c.yta@example.com', status: 'active' },
    { id: 'YT004', fullName: 'Phạm Văn D', shift: 'Sáng', phone: '0904 999 111', email: 'd.yta@example.com', status: 'active' },
    { id: 'YT005', fullName: 'Hoàng Thị E', shift: 'Chiều', phone: '0905 999 111', email: 'e.yta@example.com', status: 'inactive' },
    { id: 'YT006', fullName: 'Đỗ Văn F', shift: 'Tối', phone: '0906 999 111', email: 'f.yta@example.com', status: 'active' },
  ]), [])

  const shifts = useMemo(() => ['Sáng', 'Chiều', 'Tối'], [])

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return nurses
      .filter(n => selectedShift === 'all' ? true : n.shift === selectedShift)
      .filter(n => selectedStatus === 'all' ? true : n.status === selectedStatus)
      .filter(n => !q || n.id.toLowerCase().includes(q) || n.fullName.toLowerCase().includes(q) || n.phone.toLowerCase().includes(q) || n.email.toLowerCase().includes(q))
  }, [nurses, searchQuery, selectedShift, selectedStatus])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const pageStartIndex = (currentPage - 1) * pageSize
  const pageItems = filtered.slice(pageStartIndex, pageStartIndex + pageSize)

  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between gap-4 flex-wrap">
        <h2 className="text-2xl font-semibold">Danh sách Y tá</h2>
        <button className="bg-[#FFC419] text-white px-4 py-2 rounded hover:bg-[#e6ac17] transition">+ Thêm Y tá</button>
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          value={searchQuery}
          onChange={e => { setCurrentPage(1); setSearchQuery(e.target.value) }}
          placeholder="Tìm theo mã, tên, sđt, email"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]"
        />
        <select
          value={selectedShift}
          onChange={e => { setCurrentPage(1); setSelectedShift(e.target.value) }}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]"
        >
          <option value="all">Tất cả ca</option>
          {shifts.map(s => <option key={s} value={s}>{s}</option>)}
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
              <th className="px-4 py-3 font-medium text-gray-600">Mã YT</th>
              <th className="px-4 py-3 font-medium text-gray-600">Họ và tên</th>
              <th className="px-4 py-3 font-medium text-gray-600">Ca làm</th>
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
            {pageItems.map(n => (
              <tr key={n.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{n.id}</td>
                <td className="px-4 py-3">{n.fullName}</td>
                <td className="px-4 py-3">{n.shift}</td>
                <td className="px-4 py-3">{n.phone}</td>
                <td className="px-4 py-3">{n.email}</td>
                <td className="px-4 py-3">
                  <span className={n.status === 'active' ? 'inline-flex items-center gap-1 text-green-700 bg-green-100 border border-green-200 px-2 py-1 rounded text-xs' : 'inline-flex items-center gap-1 text-gray-700 bg-gray-100 border border-gray-200 px-2 py-1 rounded text-xs'}>
                    <span className={n.status === 'active' ? 'h-2 w-2 rounded-full bg-green-500' : 'h-2 w-2 rounded-full bg-gray-400'} />
                    {n.status === 'active' ? 'Đang hoạt động' : 'Tạm ngưng'}
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
          <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50">Trước</button>
          <span className="text-sm">Trang {currentPage}/{Math.max(1, Math.ceil(filtered.length / pageSize))}</span>
          <button onClick={() => setCurrentPage(p => Math.min(Math.max(1, Math.ceil(filtered.length / pageSize)), p + 1))} disabled={currentPage === Math.max(1, Math.ceil(filtered.length / pageSize))} className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50">Sau</button>
        </div>
      </div>
    </div>
  )
}

export default DS_YTa
import React, { useMemo, useState } from 'react'

const PhongKham = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  const pageSize = 8

  const rooms = useMemo(() => ([
    { id: 'PK101', name: 'Phòng khám 101', department: 'Nội tổng quát', status: 'active', note: 'Tầng 1' },
    { id: 'PK102', name: 'Phòng khám 102', department: 'Nhi khoa', status: 'inactive', note: 'Sửa chữa' },
    { id: 'PK201', name: 'Phòng khám 201', department: 'Ngoại tổng quát', status: 'active', note: 'Tầng 2' },
  ]), [])

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return rooms
      .filter(r => selectedStatus === 'all' ? true : r.status === selectedStatus)
      .filter(r => !q || r.id.toLowerCase().includes(q) || r.name.toLowerCase().includes(q) || r.department.toLowerCase().includes(q) || r.note.toLowerCase().includes(q))
  }, [rooms, searchQuery, selectedStatus])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const pageStartIndex = (currentPage - 1) * pageSize
  const pageItems = filtered.slice(pageStartIndex, pageStartIndex + pageSize)

  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between gap-4 flex-wrap">
        <h2 className="text-2xl font-semibold">Quản lý Phòng khám</h2>
        <button className="bg-[#FFC419] text-white px-4 py-2 rounded hover:bg-[#e6ac17] transition">+ Thêm phòng</button>
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          value={searchQuery}
          onChange={e => { setCurrentPage(1); setSearchQuery(e.target.value) }}
          placeholder="Tìm theo mã, tên, chuyên khoa, ghi chú"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]"
        />
        <select
          value={selectedStatus}
          onChange={e => { setCurrentPage(1); setSelectedStatus(e.target.value) }}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]"
        >
          <option value="all">Tất cả trạng thái</option>
          <option value="active">Đang hoạt động</option>
          <option value="inactive">Tạm ngưng</option>
        </select>
        <div />
      </div>

      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="px-4 py-3 font-medium text-gray-600">Mã phòng</th>
              <th className="px-4 py-3 font-medium text-gray-600">Tên phòng</th>
              <th className="px-4 py-3 font-medium text-gray-600">Chuyên khoa</th>
              <th className="px-4 py-3 font-medium text-gray-600">Ghi chú</th>
              <th className="px-4 py-3 font-medium text-gray-600">Trạng thái</th>
              <th className="px-4 py-3 font-medium text-gray-600">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.length === 0 && (
              <tr>
                <td className="px-4 py-6 text-center text-gray-500" colSpan={6}>Không có dữ liệu</td>
              </tr>
            )}
            {pageItems.map(r => (
              <tr key={r.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{r.id}</td>
                <td className="px-4 py-3">{r.name}</td>
                <td className="px-4 py-3">{r.department}</td>
                <td className="px-4 py-3">{r.note}</td>
                <td className="px-4 py-3">
                  <span className={r.status === 'active' ? 'inline-flex items-center gap-1 text-green-700 bg-green-100 border border-green-200 px-2 py-1 rounded text-xs' : 'inline-flex items-center gap-1 text-gray-700 bg-gray-100 border border-gray-200 px-2 py-1 rounded text-xs'}>
                    <span className={r.status === 'active' ? 'h-2 w-2 rounded-full bg-green-500' : 'h-2 w-2 rounded-full bg-gray-400'} />
                    {r.status === 'active' ? 'Đang hoạt động' : 'Tạm ngưng'}
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
          <span className="text-sm">Trang {currentPage}/{totalPages}</span>
          <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50">Sau</button>
        </div>
      </div>
    </div>
  )
}

export default PhongKham
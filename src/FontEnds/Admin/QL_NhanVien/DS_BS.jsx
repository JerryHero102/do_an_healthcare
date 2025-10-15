import React, { useMemo, useState } from 'react';

const DS_BS = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 8;

  const doctors = useMemo(
    () => [
      { id: 'BS001', fullName: 'Nguyễn Văn A', specialty: 'Nội tổng quát', phone: '0901 234 567', email: 'a.nguyen@example.com', status: 'active' },
      { id: 'BS002', fullName: 'Trần Thị B', specialty: 'Nhi khoa', phone: '0902 345 678', email: 'b.tran@example.com', status: 'inactive' },
      { id: 'BS003', fullName: 'Lê Văn C', specialty: 'Ngoại tổng quát', phone: '0903 456 789', email: 'c.le@example.com', status: 'active' },
      { id: 'BS004', fullName: 'Phạm Thị D', specialty: 'Sản phụ khoa', phone: '0904 567 890', email: 'd.pham@example.com', status: 'active' },
      { id: 'BS005', fullName: 'Hoàng Văn E', specialty: 'Tim mạch', phone: '0905 678 901', email: 'e.hoang@example.com', status: 'inactive' },
      { id: 'BS006', fullName: 'Đỗ Thị F', specialty: 'Da liễu', phone: '0906 789 012', email: 'f.do@example.com', status: 'active' },
      { id: 'BS007', fullName: 'Phan Văn G', specialty: 'Tai mũi họng', phone: '0907 890 123', email: 'g.phan@example.com', status: 'active' },
      { id: 'BS008', fullName: 'Vũ Thị H', specialty: 'Mắt', phone: '0908 901 234', email: 'h.vu@example.com', status: 'active' },
      { id: 'BS009', fullName: 'Bùi Văn I', specialty: 'Răng hàm mặt', phone: '0909 012 345', email: 'i.bui@example.com', status: 'inactive' },
      { id: 'BS010', fullName: 'Đặng Thị K', specialty: 'Thần kinh', phone: '0910 123 456', email: 'k.dang@example.com', status: 'active' },
    ],
    []
  );

  const specialties = useMemo(() => {
    const values = Array.from(new Set(doctors.map((d) => d.specialty)));
    return values.sort((a, b) => a.localeCompare(b));
  }, [doctors]);

  const filteredDoctors = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    return doctors
      .filter((d) => (selectedSpecialty === 'all' ? true : d.specialty === selectedSpecialty))
      .filter((d) => (selectedStatus === 'all' ? true : d.status === selectedStatus))
      .filter((d) => {
        if (!normalizedQuery) return true;
        return (
          d.id.toLowerCase().includes(normalizedQuery) ||
          d.fullName.toLowerCase().includes(normalizedQuery) ||
          d.phone.toLowerCase().includes(normalizedQuery) ||
          d.email.toLowerCase().includes(normalizedQuery)
        );
      });
  }, [doctors, searchQuery, selectedSpecialty, selectedStatus]);

  const totalPages = Math.max(1, Math.ceil(filteredDoctors.length / pageSize));
  const pageStartIndex = (currentPage - 1) * pageSize;
  const pageItems = filteredDoctors.slice(pageStartIndex, pageStartIndex + pageSize);

  const handleSearchChange = (e) => {
    setCurrentPage(1);
    setSearchQuery(e.target.value);
  };

  const handleSpecialtyChange = (e) => {
    setCurrentPage(1);
    setSelectedSpecialty(e.target.value);
  };

  const handleStatusChange = (e) => {
    setCurrentPage(1);
    setSelectedStatus(e.target.value);
  };

  const handlePrevPage = () => setCurrentPage((p) => Math.max(1, p - 1));
  const handleNextPage = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between gap-4 flex-wrap">
        <h2 className="text-2xl font-semibold">Danh sách Bác sĩ</h2>
        <div className="flex items-center gap-2">
          <button className="bg-[#FFC419] text-white px-4 py-2 rounded hover:bg-[#e6ac17] transition">+ Thêm bác sĩ</button>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="relative">
          <input
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Tìm kiếm theo mã, tên, sđt, email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]"
          />
        </div>
        <select
          value={selectedSpecialty}
          onChange={handleSpecialtyChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]"
        >
          <option value="all">Tất cả chuyên khoa</option>
          {specialties.map((sp) => (
            <option key={sp} value={sp}>{sp}</option>
          ))}
        </select>
        <select
          value={selectedStatus}
          onChange={handleStatusChange}
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
              <th className="px-4 py-3 font-medium text-gray-600">Mã BS</th>
              <th className="px-4 py-3 font-medium text-gray-600">Họ và tên</th>
              <th className="px-4 py-3 font-medium text-gray-600">Chuyên khoa</th>
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
            {pageItems.map((d) => (
              <tr key={d.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{d.id}</td>
                <td className="px-4 py-3">{d.fullName}</td>
                <td className="px-4 py-3">{d.specialty}</td>
                <td className="px-4 py-3">{d.phone}</td>
                <td className="px-4 py-3">{d.email}</td>
                <td className="px-4 py-3">
                  <span className={
                    d.status === 'active'
                      ? 'inline-flex items-center gap-1 text-green-700 bg-green-100 border border-green-200 px-2 py-1 rounded text-xs'
                      : 'inline-flex items-center gap-1 text-gray-700 bg-gray-100 border border-gray-200 px-2 py-1 rounded text-xs'
                  }>
                    <span className={
                      d.status === 'active' ? 'h-2 w-2 rounded-full bg-green-500' : 'h-2 w-2 rounded-full bg-gray-400'
                    } />
                    {d.status === 'active' ? 'Đang hoạt động' : 'Tạm ngưng'}
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
        <div className="text-sm text-gray-600">
          Hiển thị {pageItems.length > 0 ? pageStartIndex + 1 : 0}–{pageStartIndex + pageItems.length} / {filteredDoctors.length}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Trước
          </button>
          <span className="text-sm">Trang {currentPage}/{totalPages}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Sau
          </button>
        </div>
      </div>
    </div>
  )
}

export default DS_BS
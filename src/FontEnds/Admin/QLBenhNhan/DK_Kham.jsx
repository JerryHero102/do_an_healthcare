import React, { useState } from 'react'

const DK_Kham = () => {
  const [form, setForm] = useState({
    fullName: '',
    dob: '',
    gender: 'male',
    phone: '',
    email: '',
    specialty: '',
    preferredDate: '',
    preferredTime: '',
    note: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: call API to create appointment
    alert('Đăng ký khám thành công (mock)')
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Đăng ký khám</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Họ và tên</label>
          <input name="fullName" value={form.fullName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]" placeholder="Nhập họ và tên" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Ngày sinh</label>
          <input type="date" name="dob" value={form.dob} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Giới tính</label>
          <select name="gender" value={form.gender} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]">
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Khác</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Số điện thoại</label>
          <input name="phone" value={form.phone} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]" placeholder="Nhập số điện thoại" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]" placeholder="email@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Chuyên khoa</label>
          <select name="specialty" value={form.specialty} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]">
            <option value="">Chọn chuyên khoa</option>
            <option value="Noi">Nội</option>
            <option value="Ngoai">Ngoại</option>
            <option value="Nhi">Nhi</option>
            <option value="San">Sản</option>
            <option value="Mat">Mắt</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Ngày mong muốn</label>
          <input type="date" name="preferredDate" value={form.preferredDate} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Giờ mong muốn</label>
          <input type="time" name="preferredTime" value={form.preferredTime} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Ghi chú</label>
          <textarea name="note" value={form.note} onChange={handleChange} rows={3} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]" placeholder="Mô tả triệu chứng, tiền sử..." />
        </div>

        <div className="md:col-span-2 flex items-center justify-end gap-2 mt-2">
          <button type="button" onClick={() => setForm({ fullName: '', dob: '', gender: 'male', phone: '', email: '', specialty: '', preferredDate: '', preferredTime: '', note: '' })} className="px-4 py-2 border rounded hover:bg-gray-50">Làm mới</button>
          <button type="submit" className="bg-[#FFC419] text-white px-4 py-2 rounded hover:bg-[#e6ac17] transition">Đăng ký</button>
        </div>
      </form>
    </div>
  )
}

export default DK_Kham
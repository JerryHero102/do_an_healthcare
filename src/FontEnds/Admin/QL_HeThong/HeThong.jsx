import React, { useState } from 'react'

const HeThong = () => {
  const [settings, setSettings] = useState({
    clinicName: 'Phòng khám ABC',
    address: '123 Đường XYZ, Quận 1, TP.HCM',
    phone: '0900 000 000',
    email: 'contact@clinic.example.com',
    workStart: '08:00',
    workEnd: '17:00',
    slotMinutes: 20,
    allowOnlineBooking: true,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: call API save settings
    alert('Đã lưu cài đặt (mock)')
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Cài đặt hệ thống</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Tên cơ sở</label>
          <input name="clinicName" value={settings.clinicName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Địa chỉ</label>
          <input name="address" value={settings.address} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Số điện thoại</label>
          <input name="phone" value={settings.phone} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" name="email" value={settings.email} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Giờ làm việc (bắt đầu)</label>
          <input type="time" name="workStart" value={settings.workStart} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Giờ làm việc (kết thúc)</label>
          <input type="time" name="workEnd" value={settings.workEnd} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Thời lượng 1 slot (phút)</label>
          <input type="number" min={5} step={5} name="slotMinutes" value={settings.slotMinutes} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC419]" />
        </div>
        <div className="flex items-center gap-2 mt-6">
          <input id="allowOnlineBooking" type="checkbox" name="allowOnlineBooking" checked={settings.allowOnlineBooking} onChange={handleChange} className="h-4 w-4 text-[#FFC419] focus:ring-[#FFC419] border" />
          <label htmlFor="allowOnlineBooking">Cho phép đặt lịch trực tuyến</label>
        </div>

        <div className="md:col-span-2 flex items-center justify-end gap-2 mt-2">
          <button type="button" onClick={() => setSettings({ clinicName: '', address: '', phone: '', email: '', workStart: '08:00', workEnd: '17:00', slotMinutes: 20, allowOnlineBooking: true })} className="px-4 py-2 border rounded hover:bg-gray-50">Làm mới</button>
          <button type="submit" className="bg-[#FFC419] text-white px-4 py-2 rounded hover:bg-[#e6ac17] transition">Lưu</button>
        </div>
      </form>
    </div>
  )
}

export default HeThong
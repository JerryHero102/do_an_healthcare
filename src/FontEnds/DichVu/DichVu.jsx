import Header from '../Home/Header';
import Footer from '../Home/Footer';

const DichVu = () => {
  return (
    <div className="w-full">
      <Header />
      
      {/* Content chính của trang Dịch Vụ */}
      <div className="min-h-screen">
        {/* Banner */}
        <section className="h-[300px] bg-[#E3FFF8] flex flex-col justify-center items-center text-center">
          <h2 className="text-[36px] font-bold text-[#2c3e50]">Dịch Vụ Y Tế</h2>
          <p className="text-[18px] mt-2 text-gray-600">Các dịch vụ y tế toàn diện, hiện đại và chuyên nghiệp</p>
        </section>

        {/* Danh sách dịch vụ chính */}
        <section className="py-10 px-20">
          <h3 className="text-[28px] font-semibold mb-8 text-[#2c3e50]">Dịch vụ chính</h3>
          <div className="grid grid-cols-3 gap-8">
            {[
              { 
                name: "Khám bệnh trực tuyến", 
                desc: "Tư vấn sức khỏe từ xa qua video call với bác sĩ chuyên khoa",
                icon: "💻",
                price: "Từ 200.000đ"
              },
              { 
                name: "Khám sức khỏe tổng quát", 
                desc: "Gói khám toàn diện với đầy đủ các xét nghiệm cơ bản",
                icon: "🏥",
                price: "Từ 1.500.000đ"
              },
              { 
                name: "Xét nghiệm tận nơi", 
                desc: "Lấy mẫu xét nghiệm tại nhà, kết quả nhanh chóng",
                icon: "🔬",
                price: "Từ 500.000đ"
              },
              { 
                name: "Tư vấn dinh dưỡng", 
                desc: "Chế độ ăn uống khoa học phù hợp với tình trạng sức khỏe",
                icon: "🥗",
                price: "Từ 300.000đ"
              },
              { 
                name: "Phục hồi chức năng", 
                desc: "Vật lý trị liệu, phục hồi sau chấn thương và bệnh lý",
                icon: "🏃",
                price: "Từ 400.000đ"
              },
              { 
                name: "Chăm sóc tại nhà", 
                desc: "Y tá, bác sĩ đến tận nhà chăm sóc người bệnh",
                icon: "🏠",
                price: "Từ 800.000đ"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white shadow-lg p-8 rounded-2xl hover:shadow-xl transition-all cursor-pointer border border-gray-100">
                <div className="text-[56px] mb-4">{service.icon}</div>
                <h4 className="text-[22px] font-semibold text-[#2c3e50] mb-3">{service.name}</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-4">{service.desc}</p>
                <p className="text-[#FFC419] font-semibold text-[16px] mb-3">{service.price}</p>
                <button className="w-full bg-[#FFC419] hover:bg-[#e6ae14] text-white font-medium py-2 rounded-lg">
                  Đặt lịch ngay
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Gói khám sức khỏe */}
        <section className="py-10 px-20 bg-[#F8F9FA]">
          <h3 className="text-[28px] font-semibold mb-8 text-[#2c3e50]">Gói khám sức khỏe</h3>
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                name: "Gói Cơ Bản",
                price: "1.500.000đ",
                features: [
                  "Khám lâm sàng tổng quát",
                  "Xét nghiệm máu cơ bản",
                  "Đo huyết áp, nhịp tim",
                  "X-quang phổi",
                  "Siêu âm bụng tổng quát"
                ]
              },
              {
                name: "Gói Nâng Cao",
                price: "3.500.000đ",
                features: [
                  "Tất cả dịch vụ gói cơ bản",
                  "Xét nghiệm sinh hóa mở rộng",
                  "Điện tim đồ",
                  "Siêu âm tim",
                  "Nội soi dạ dày",
                  "Tư vấn dinh dưỡng"
                ],
                popular: true
              },
              {
                name: "Gói Cao Cấp",
                price: "6.500.000đ",
                features: [
                  "Tất cả dịch vụ gói nâng cao",
                  "CT Scanner",
                  "MRI não",
                  "Xét nghiệm ung thư",
                  "Gen di truyền",
                  "Tư vấn bác sĩ chuyên khoa"
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg relative ${pkg.popular ? 'border-2 border-[#FFC419]' : 'border border-gray-100'}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 right-6 bg-[#FFC419] text-white px-4 py-1 rounded-full text-[13px] font-semibold">
                    Phổ biến nhất
                  </div>
                )}
                <h4 className="text-[24px] font-bold text-[#2c3e50] mb-2">{pkg.name}</h4>
                <p className="text-[32px] font-bold text-[#FFC419] mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-700 text-[15px] flex items-start">
                      <span className="text-[#1e90ff] mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full font-semibold py-3 rounded-lg ${pkg.popular ? 'bg-[#FFC419] hover:bg-[#e6ae14] text-white' : 'bg-gray-100 hover:bg-gray-200 text-[#2c3e50]'}`}>
                  Chọn gói này
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Quy trình đặt lịch */}
        <section className="py-10 px-20">
          <h3 className="text-[28px] font-semibold mb-8 text-center text-[#2c3e50]">Quy trình đặt lịch đơn giản</h3>
          <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Chọn dịch vụ", desc: "Lựa chọn dịch vụ phù hợp với nhu cầu" },
              { step: "2", title: "Đặt lịch", desc: "Chọn ngày giờ và bác sĩ mong muốn" },
              { step: "3", title: "Xác nhận", desc: "Nhận thông báo xác nhận qua email/SMS" },
              { step: "4", title: "Khám bệnh", desc: "Đến cơ sở y tế hoặc khám online" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#FFC419] rounded-full flex items-center justify-center text-white text-[24px] font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-[18px] font-semibold text-[#2c3e50] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-[14px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 px-20 bg-[#E3FFF8] text-center">
          <h3 className="text-[32px] font-bold text-[#2c3e50] mb-4">Sẵn sàng chăm sóc sức khỏe của bạn?</h3>
          <p className="text-[18px] text-gray-700 mb-6">Đặt lịch ngay hôm nay để nhận ưu đãi đặc biệt</p>
          <button className="bg-[#FFC419] hover:bg-[#e6ae14] text-white font-bold px-10 py-4 rounded-xl shadow-lg text-[18px]">
            Đặt lịch ngay
          </button>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default DichVu;


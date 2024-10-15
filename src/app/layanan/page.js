import style from './page.module.css'


const data = [
    {
        icon: 'logo properti.jpg',
        title: 'Properti Baru',
        description: 'Rumah impian kini menjadi kenyataan, beli rumah dengan fasilitas yang lengkap dan nyaman.'
    },
    {
        icon: 'logo sewa.jpg',
        title: 'Sewa Rumah',
        description: 'Sewa rumah yang indah menjadi salah satu pilihan yang baik untuk tempat tinggal keluarga.'
    },
    {
        icon: 'logo beli.jpg',
        title: 'Beli Rumah',
        description: 'Beli rumah dengan fasilitas terbaik dan harga yang terjangkau dari sumber yang terpercaya.'
    },
]

export default function Layanan() {
    return (
        <div className={style.body}>
            <p className={style.Tittle}>Layanan Kami</p>
            <p className={style.SubTittle}>Rumah impian hadir menjadi solusi tempat tinggalmu</p>
            <div className={style.ContainerCard}>
                {data.map((item, index) => (
                    <div className={style.Card} key={index}>
                        <img src={item.icon} alt={item.title} className={style.Icon} />
                        <p className={style.CardTittle}>{item.title}</p>
                        <p className={style.CardSubTittle}>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
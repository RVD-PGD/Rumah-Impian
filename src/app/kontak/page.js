import style from './page.module.css'
import Image from 'next/image'

export default function Rumah() {
    return (
        <div>
            <div className={style.BackGroundSofa}>
                <div className={style.RowContact}>
                    <p className={style.quote1}>
                        Jika butuh bantuan<br />
                        silahkan hubungi kontak kami!<br />
                        kami siap membantu
                    </p>
                    <p className={style.SubQuote}>
                        Kontak
                    </p>
                    <div className={style.RowFirst}>
                        <Image src="/gedung.png" width={18} height={18} alt="icon gedung" />
                        <p className={style.TextContact}>
                            Jl. Pasti Sukses no 123, Jakarta, Indonesia
                        </p>
                    </div>
                    <div className={style.RowFirst}>
                        <Image src="/telepon.png" width={18} height={18} alt="icon gedung" />
                        <p className={style.TextContact}>
                            022-0123-4567
                        </p>
                    </div>
                    <div className={style.RowFirst} style={{ marginBottom: '20px' }}>
                        <Image src="/mail.png" width={18} height={18} alt="icon gedung" />
                        <p className={style.TextContact}>
                            rumahimpiankola@gmail.com
                        </p>
                    </div>
                    <p className={style.SubQuote}>
                        Sosial Media
                    </p>
                    <div className={style.RowFirst}>
                        <Image src="/ig.png" width={18} height={18} alt="icon gedung" />
                        <Image src="/fb.png" width={18} height={18} style={{ marginLeft: '10px' }} alt="icon gedung" />
                        <Image src="/tt.png" width={18} height={18} style={{ marginLeft: '10px' }} alt="icon gedung" />
                        <p className={style.TextContact}>
                            rumahimpiankola@gmail.com
                        </p>
                    </div>
                </div>
                <div className={style.RowContact} style={{ backgroundColor: '#FFFFFF', borderRadius: '5px' }}>
                    <div className={style.ColumnEmail}>
                        <p className={style.TextPertanyaan}>
                            Ada pertanyaan...?
                        </p>
                        <input placeholder='Masukan email anda disini..' style={{ backgroundColor: '#D9D9D9', border: 'none', width: '485px', height: '65px', paddingInline: '20px' }} />
                        <input placeholder='Masukan pertanyaan anda..' style={{ backgroundColor: '#D9D9D9', border: 'none', width: '485px', height: '65px', paddingInline: '20px', marginBottom: '25px' }} />
                        <button className={style.ButtonKirim}>
                            Kirim
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
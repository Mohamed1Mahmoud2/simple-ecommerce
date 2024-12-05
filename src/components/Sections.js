

import { useState } from "react"
import watch1 from './photos/watch1.jpg'


function Sections() {
    function wrapItems(arr, newArr) {
        let key = 0;
        newArr.push(arr.map((item) => {
            key++
            return (<div className='card' key={key}>
                <h3>{item.name}</h3>
                <div className="image">
                    <img src={item.photo} alt={item.name} />
                </div>
                <p>about: {item.info}</p>
                <p>price: {item.price}$</p>
            </div>)
        }))

    }

    let watchItem = [
        {
            name: 'watchone',
            info: 'this is watch from the xcompany ',
            price: 12587,
            photo: watch1
        },
        {
            name: 'watchtwo',
            info: 'this is watch from the xcompany ',
            price: 12587,
            photo: "photos-pub/watch2.jpg"
        }
    ];


    let phoneItem = [

        {
            name: 'phoneone',
            info: 'this is phone from the xcompany ',
            price: 12587,
            photo: 'photos-pub/phone1.jpg'
        },
        {
            name: 'phonetwo',
            info: 'this is phone from the xcompany ',
            price: 12587,
            photo: 'photos-pub/phone3.jpg'
        }
    ]

    let lapItem = [

        {
            name: 'lapone',
            info: 'this is lap from the xcompany ',
            price: 12587,
            photo: 'photos-pub/lap1.jpg'
        },
        {
            name: 'laptwo',
            info: 'this is lap from the xcompany',
            price: 12587,
            photo: 'photos-pub/lap2.jpg'
        }
    ]

    let tvItem = [

        {
            name: 'tvone',
            info: 'this is tv from the xcompany',
            price: 12587,
            photo: 'photos-pub/tv1.jpg'
        },
        {
            name: 'tvtwo',
            info: 'this is tv from the xcompany',
            price: 12587,
            photo: 'photos-pub/tv2.jpg'
        },
        {
            name: 'tvthree',
            info: 'this is tv from the xcompany',
            price: 12587,
            photo: 'photos-pub/tv2.jpg'
        }
    ]


    const itemsWatch = []
    const itemsPhone = []
    const itemsLap = []
    const itemsTv = []

    wrapItems(watchItem, itemsWatch)
    wrapItems(phoneItem, itemsPhone)
    wrapItems(lapItem, itemsLap)
    wrapItems(tvItem, itemsTv)

    const [item, setItem] = useState(itemsWatch);
    const [phone, setPone] = useState(itemsPhone);
    const [lap, setLap] = useState(itemsLap);
    const [tele, setTele] = useState(itemsTv);

    function changeHandelEle(arr) {
        // when we need change or add new items in the app we use this function
        wrapItems(arr)
        setItem(itemsWatch)
        setTele(itemsWatch)
    }
    return (
        <>
            <section className='watch' id='watch'>

                <h2>WATCH</h2>
                <div className="cards">{item}</div>
            </section>

            <section className='phone' id='phone'>
                <h2>PHONE</h2>
                <div className="cards">{phone}</div>
            </section>

            <section className='lap' id='lap'>
                <h2>LAP</h2>
                <div className="cards">{lap}</div>
            </section>

            <section className='tv' id='tv'>
                <h2>TV</h2>
                <div className="cards">{tele}</div>
            </section>

            <button onChange={changeHandelEle} hidden></button>
        </>
    )
}

export default Sections;
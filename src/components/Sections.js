

import { useState } from "react"
import watch1 from './photos/watch1.jpg'
import watch2 from './photos/watch2.jpg'
import phone1 from './photos/phone1.jpg'
import phone3 from './photos/phone3.jpg'
import lap1 from './photos/lap1.jpg'
import lap2 from './photos/lap2.jpg'
import tv1 from './photos/tv1.jpg'
import tv2 from './photos/tv2.jpg'

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
            photo: watch2
        }
    ];


    let phoneItem = [

        {
            name: 'phoneone',
            info: 'this is phone from the xcompany ',
            price: 12587,
            photo: phone1
        },
        {
            name: 'phonetwo',
            info: 'this is phone from the xcompany ',
            price: 12587,
            photo: phone3
        }
    ]

    let lapItem = [

        {
            name: 'lapone',
            info: 'this is lap from the xcompany ',
            price: 12587,
            photo: lap1
        },
        {
            name: 'laptwo',
            info: 'this is lap from the xcompany',
            price: 12587,
            photo: lap2
        }
    ]

    let tvItem = [

        {
            name: 'tvone',
            info: 'this is tv from the xcompany',
            price: 12587,
            photo: tv1
        },
        {
            name: 'tvtwo',
            info: 'this is tv from the xcompany',
            price: 12587,
            photo: tv2
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
import { Link } from 'react-router-dom';
import Nav from './Nav';

const OptionsPage = () => {
    const details = [
        { img: 'images/js.png', des: 'JAVA SCRIPT' },
        { img: 'images/java.png', des: 'JAVA' },
        { img: 'images/python-new.png', des: 'PYTHON' },
        { img: 'images/c.png', des: 'C' },
        { img: 'images/htmlcss.jpeg', des: 'HTML & CSS' },
        { img: 'images/c++-new.webp', des: 'C++' },
    ];

    const first = details.slice(0, 2);
    const second = details.slice(2, 4);
    const third = details.slice(4);

    
    return (
        <>
            <Nav />
            <div className="flex-div">
                {first.map((item, index) => (
                    <div key={index} className='outer'>
                        <img src={item.img} className='icon' alt={item.des} />
                        <div align='center' className='desc-div'>
                            {item.des}
                        </div>
                        <Link to={`/difficulty/${item.des.toLowerCase()}`}><button align='center' className='page-button'> PLAY NOW!</button></Link>
                    </div>
                ))}
            </div>

            <div className="flex-div">
                {second.map((item, index) => (
                    <div key={index} className='outer'>
                        <img src={item.img} className='icon' alt={item.des} />
                        <div align='center' className='desc-div'>
                            {item.des}
                        </div>
                        <Link to={`/difficulty/${item.des.toLowerCase()}`}><button align='center' className='page-button'> PLAY NOW!</button></Link>
                    </div>
                ))}
            </div>

            <div className="flex-div">
                {third.map((item, index) => (
                    <div key={index} className='outer'>
                        <img src={item.img} className='icon' alt={item.des} />
                        <div align='center' className='desc-div'>
                            {item.des}
                        </div>
                        <Link to={`/difficulty/${item.des.toLowerCase()}`}><button align='center' className='page-button'> PLAY NOW!</button></Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default OptionsPage;
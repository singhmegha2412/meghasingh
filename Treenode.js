import React, {useState} from 'react';
import './Tree.css'


const Treeex =() =>
{
        const [isHovered1, setIsHovered1] = useState(false);
        const [isHovered2, setIsHovered2] = useState(false);
        const [isHovered3, setIsHovered3] = useState(false);
        const [isHovered4, setIsHovered4] = useState(false);
        const [isHovered5, setIsHovered5] = useState(false);
        const [isHovered6, setIsHovered6] = useState(false);
        const [isHovered7, setIsHovered7] = useState(false);
        const [isHovered8, setIsHovered8] = useState(false);
        const [isHovered9, setIsHovered9] = useState(false);
        const [isHovered10, setIsHovered10] = useState(false);
        const [isHovered11, setIsHovered11] = useState(false);
        const [isHovered12, setIsHovered12] = useState(false);
        const [isHovered13, setIsHovered13] = useState(false);
        const [isHovered14, setIsHovered14] = useState(false);
        const [isHovered15, setIsHovered15] = useState(false);
      
      
    return(
    <div className='container'>
   
        <br /> <br /> <br /> <br />
    
        <div onMouseEnter={()=> setIsHovered1(true)} 
        onMouseLeave={()=> setIsHovered1(false)}
        className='box-container'>
           <h3  x="10" y="50" width="50" height="50">Research</h3> 
           
            {isHovered1 && (
                    <div className="description-box1">
                        Research in car manufacturing encompasses a wide 
                        range of activities aimed at improving various aspects
                         of the automotive industry.Research in car manufacturing
                          can indeed be divided into two main categories: 
                          external research and internal research.  
                    </div>
            )}
            <div className='line'> </div>
            <div className='right-line'></div>
            <div className='vertical-line'></div>

            <div className='horizontal-line'></div>
           
            
            <div className='horizontal-line2'></div>


        </div> 
        <div onMouseEnter={()=> setIsHovered6(true)} 
        onMouseLeave={()=> setIsHovered6(false)}
        className='box1'>
           <h3  x="10" y="50" width="50" height="50">External</h3> 
           
            {isHovered6 && (
                    <div className="description-box">
                        External research in car manufacturing involves studying 
                        factors and trends outside the company's direct 
                        control but which significantly impact the industry.
                    </div>
            )}

        </div>

        <div onMouseEnter={()=> setIsHovered7(true)} 
        onMouseLeave={()=> setIsHovered7(false)}
        className='box2'>
           <h3  x="10" y="50" width="50" height="50">Internal</h3> 
           
            {isHovered7 && (
                    <div className="description-box">
                        Internal research focuses on activities conducted
                         within the company to improve processes, products, 
                         and efficiency.
                    </div>
            )}

        </div>
        
        <br /> <br /> <br /> <br />
       


        <div onMouseEnter={()=> setIsHovered2(true)} 
        onMouseLeave={()=> setIsHovered2(false)}
        className='box-container'>
            <h3>Planning</h3>

            {isHovered2 && (
                    <div className="description-box1">
                        Planning for car manufacturing involves a comprehensive
                         process to ensure efficient and effective production
                          of vehicles while meeting quality standards, cost
                           targets, and market demands
                    </div>
            )}
            <div className='line'> </div>
            <div className='right-line'></div>
            <div className='vertical-line'></div>
            <div className='horizontal-line'></div>
            <div className='horizontal-line2'></div>
        </div> 
        <div onMouseEnter={()=> setIsHovered8(true)} 
        onMouseLeave={()=> setIsHovered8(false)}
        className='box3'>
           <h3  x="10" y="50" width="50" height="50">PRD</h3> 
           
            {isHovered8 && (
                    <div className="description-box">
                    
A Product Requirements Document (PRD) plays a crucial role in the
 planning of car manufacturing as it outlines the 
 specifications, features, and functionalities of the 
 vehicle to be produced
                    </div>
            )}

        </div>

        <div onMouseEnter={()=> setIsHovered9(true)} 
        onMouseLeave={()=> setIsHovered9(false)}
        className='box4'>
           <h3  x="10" y="50" width="50" height="50">Specs</h3> 
           
            {isHovered9 && (
                    <div className="description-box">
                        In planning for car manufacturing, specifying the vehicle's
                         specifications is crucial for guiding the design, 
                         engineering, production, and marketing processes.
                          These specifications, often detailed in a Product 
                          Requirements Document (PRD) or a similar document, 
                          encompass various aspects of the vehicle's performance, 
                          features, design, and functionality. 
                    </div>
            )}

        </div>
        <br /> <br /> <br /> <br />


        <div onMouseEnter={()=> setIsHovered3(true)} 
        onMouseLeave={()=> setIsHovered3(false)}
        className='box-container'>
            <h3>Designing</h3>

            {isHovered3 && (
                    <div className="description-box1">
                        
Designing in car manufacturing is a multifaceted process 
that involves conceptualizing, developing, and refining 
the visual and functional aspects of vehicles.
                    </div>
            )}
            <div className='line'> </div>
            <div className='right-line'></div>
            <div className='vertical-line'></div>
            <div className='horizontal-line'></div>
            <div className='horizontal-line2'></div>
        </div> 
        <div onMouseEnter={()=> setIsHovered10(true)} 
        onMouseLeave={()=> setIsHovered10(false)}
        className='box5'>
           <h3  x="10" y="50" width="50" height="50">Hardware</h3> 
           
            {isHovered10 && (
                    <div className="description-box">
                        In the context of car manufacturing, "hardware" typically 
                        refers to the physical components and systems that 
                        make up the vehicle. Designing hardware in car
                         manufacturing involves engineering and integrating
                          various mechanical, electrical, and electronic 
                          components to create a functional and reliable 
                          vehicle.
                    </div>
            )}

        </div>

        <div onMouseEnter={()=> setIsHovered11(true)} 
        onMouseLeave={()=> setIsHovered11(false)}
        className='box6'>
           <h3  x="10" y="50" width="50" height="50">Software</h3> 
           
            {isHovered11 && (
                    <div className="description-box">
                       

        Software plays a crucial role in various aspects 
        of designing car manufacturing processes and 
        systems, enabling automation, optimization, and 
        integration across different stages of production.
                    </div>
            )}

        </div>
        <br /> <br /> <br /> <br />


        <div onMouseEnter={()=> setIsHovered4(true)} 
        onMouseLeave={()=> setIsHovered4(false)}
        className='box-container'>
            <h3>Manufacturing</h3>

            {isHovered4 && (
                    <div className="description-box1">
                       

                Manufacturing in car manufacturing involves the conversion of 
                raw materials and components into finished vehicles 
                through a series of processes, assembly lines, and 
                quality control measures
                    </div>
            )}
            <div className='line'> </div>
            <div className='right-line'></div>
            <div className='vertical-line'></div>
            <div className='horizontal-line'></div>
            <div className='horizontal-line2'></div>
        </div>
        <div onMouseEnter={()=> setIsHovered12(true)} 
        onMouseLeave={()=> setIsHovered12(false)}
        className='box7'>
           <h3  x="10" y="50" width="50" height="50">Material</h3> 
           
            {isHovered12 && (
                    <div className="description-box">
                        The materials used in the manufacturing of cars play a 
                        critical role in determining the vehicle's performance,
                         safety, durability, and overall quality. Car 
                         manufacturers carefully select materials based on 
                         factors such as strength, weight, cost, and 
                         environmental impact. 
                    </div>
            )}

        </div>

        <div onMouseEnter={()=> setIsHovered13(true)} 
        onMouseLeave={()=> setIsHovered13(false)}
        className='box8'>
           <h3  x="10" y="50" width="50" height="50">Production</h3> 
           
            {isHovered13 && (
                    <div className="description-box">
                        In car manufacturing, production refers to the process of 
                        assembling various components and systems to create
                         finished vehicles. The production phase involves a
                          series of steps that transform raw materials and 
                          parts into fully functional cars.
                    </div>
            )}

        </div>
         <br /> <br /> <br /> <br />


        <div onMouseOver={()=> setIsHovered5(true)} 
        onMouseOut={()=> setIsHovered5(false)}
        className='box-container'>
            <h3>Sales/Marketing</h3>

            {isHovered5 && (
                    <div className="description-box1">
                        Sales and marketing play a crucial role in the success
                         of car manufacturing companies, as they are 
                         responsible for promoting and selling vehicles to 
                         customers.
                    </div>
            )}
            <div className='line'> </div>

            <div className='right-line'></div>
            <div className='vertical-line'></div>
            <div className='horizontal-line'></div>
            <div className='horizontal-line2'></div>
        </div> 
        <div onMouseEnter={()=> setIsHovered14(true)} 
        onMouseLeave={()=> setIsHovered14(false)}
        className='box9'>
           <h3  x="10" y="50" width="50" height="50">Online</h3> 
           
            {isHovered14 && (
                    <div className="description-box">
                       Online sales and marketing have become increasingly important
                        in the automotive industry, offering car manufacturers
                         new opportunities to reach customers, engage with 
                         them, and drive sales. 
                    </div>
            )}

        </div>

        <div onMouseEnter={()=> setIsHovered15(true)} 
        onMouseLeave={()=> setIsHovered15(false)}
        className='box10'>
           <h3  x="10" y="50" width="50" height="50">Dealership</h3> 
           
            {isHovered15 && (
                    <div className="description-box">
                     
                Dealerships play a crucial role in the sales and marketing
                 efforts of car manufacturing companies. They serve as
                  the primary point of contact between car manufacturers 
                  and consumers, facilitating the sale of vehicles and 
                  providing essential services such as test drives, 
                  financing, and aftersales support.
                    </div>
            )}

        </div>
        <br /> <br />


    </div>

    )
}

export default Treeex;
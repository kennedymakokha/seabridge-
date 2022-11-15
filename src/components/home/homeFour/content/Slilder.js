import React from "react";
import Imag4 from "./truck.jpeg"

import Imag5 from "./Plane-.jpg"
import Image3 from "./container1.jpg"
import Image2 from "./Sgr1.jpg"
const Slider = () => {
    const Styles = {
        tpCaption: {
            zIndex: 3, whiteSpace: "nowrap", fontWeight: "800", backgroundColor: "rgba(41, 46, 49, 1.00)", borderColor: "rgba(255, 255, 255, 0)", outline: "none", boxShadow: "none", boxSizing: "borderBox", MozBoxSizing: "border-box", WebkitBoxSizing: "border-box",
        }
    }
    const images =
        [
            {
                img: Imag5,
                title: 'We Are seabridge',
                describe: 'From Pickup to Destination',
                zoom: -10,
                transition: "zoomout",
                caption: "We deliver your products on time with pure safety. Sed ut perspiciatis unde<br /> omnis iste natus error sit voluptatem accusantium doloremque laudantium"
            },

            {
                img: Image3,
                title: 'We Are seabridge',
                describe: 'From Pickup to Destination',
                zoom: 120,
                transition: "fade",
                caption: "We deliver your products on time with pure safety. Sed ut perspiciatis unde<br /> omnis iste natus error sit voluptatem accusantium doloremque laudantium"
            },
            {
                img: Image2,
                title: 'We Are seabridge',
                describe: 'From Pickup to Destination',
                zoom: 10,
                transition: "zoomout",
                caption: "We deliver your products on time with pure safety. Sed ut perspiciatis unde<br /> omnis iste natus error sit voluptatem accusantium doloremque laudantium"
            },
            {
                img: Imag4,
                title: 'We Are seabridge',
                describe: 'From Pickup to Destination',
                zoom: 100,
                transition: "fade",
                caption: "We deliver your products on time with pure safety. Sed ut perspiciatis unde<br /> omnis iste natus error sit voluptatem accusantium doloremque laudantium"
            },


        ]
    return (
        <>
            <div className="slider bg-navy-blue">
                <div id="rev_slider_1078_1_wrapper"
                    className="rev_slider_wrapper fullwidthbanner-container"
                    data-alias="classNameic4export"
                    data-source="gallery"
                    style={{
                        margin: "0px auto",
                        backgroundColor: "transparent",
                        padding: "0px",
                        marginTop: "0px",
                        marginBottom: "0px"
                    }}>
                    <div id="rev_slider_1078_1" className="rev_slider fullscreenbanner"
                        style={{ display: "none" }}>
                        <ul>
                            {images.map((slide, i) => (
                                <li
                                    data-index={i}
                                    key={i}
                                    data-transition={slide.transition}
                                    data-slotamount="default"
                                    data-hideafterloop="0"
                                    data-hideslideonmobile="off"
                                    data-easein="Power4.easeIn"
                                    data-easeout="Power4.easeIn"
                                    data-masterspeed="2000"
                                    data-thumb={slide.img}
                                    data-rotate="0"
                                    data-saveperformance="off"
                                    data-title="Slide"
                                    data-param1=""
                                    data-param2=""
                                    data-param3=""
                                    data-param4=""
                                    data-param5=""
                                    data-param6=""
                                    data-param7=""
                                    data-param8=""
                                    data-param9=""
                                    data-param10=""
                                    data-description=""
                                    data-slicey_shadow="0px 0px 50px 0px transparent"
                                >
                                    <img src={slide.img} alt="No image"
                                        data-bgposition="center center"
                                        data-kenburns="on"
                                        data-duration="5000"
                                        data-ease="Linear.easeNone"
                                        data-scalestart="100"
                                        data-scaleend={slide.zoom}
                                        data-rotatestart="0"
                                        data-rotateend="0"
                                        data-blurstart="0"
                                        data-blurend="0"
                                        data-offsetstart="0 0"
                                        data-offsetend="0 0"
                                        className="rev-slidebg"
                                        data-no-retina
                                    />
                                    <div className="tp-caption tp-resizeme NotGeneric-Title"
                                        id={i}
                                        data-blendmode="color-dodge"
                                        data-x="['center','center','center','center']"
                                        data-hoffset="['0','0','0','0']"
                                        data-y="['middle','middle','middle','middle']"
                                        data-voffset="['-70','-70','-70','-70']"
                                        data-fontsize="['70','60','60','55']"
                                        data-lineheight="['80','70','70','40']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="text"
                                        data-responsive_offset="on"
                                        data-frames='[{"delay": 200,"speed":1000,"sfx_effect":"blockfromleft","sfxcolor":"#ffffff","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay": "wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                        data-textalign="['inherit','inherit','inherit','inherit']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                    >{slide.title}</div>

                                    <div className="tp-caption medium_light_white tp-resizeme color-red-200"
                                        id="slide-82-layer-3"
                                        data-blendmode="color-dodge"
                                        data-x="['center','center','center','center']"
                                        data-hoffset="['0','0','0','0']"
                                        data-y="['middle','middle','middle','middle']"
                                        data-voffset="['-10','-10','-10','-10']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="text"
                                        data-responsive_offset="on"
                                        data-frames='[{"delay": 500,"speed":1000,"sfx_effect":"blockfromleft","sfxcolor":"#ffffff","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay": "wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                        data-textalign="['inherit','inherit','inherit','inherit']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        data-fontsize="['28','28','28','28']"
                                        data-lineheight="['34','34','34','50']"
                                    >{slide.describe}</div>

                                    <div className="tp-caption tp-resizeme small_light_white "
                                        id="slide-82-layer-4"
                                        data-x="['center','center','center','center']"
                                        data-hoffset="['0','0','0','0']"
                                        data-y="['middle','middle','middle','middle']"
                                        data-voffset="['60','60','60','60']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="text"
                                        data-responsive_offset="on"
                                        data-frames='[{"delay":600,"speed":1000,"sfx_effect":"blockfromleft","sfxcolor":"#ffffff","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                        data-textalign="['inherit','inherit','inherit','inherit']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        data-fontsize="['16','16','16','13']"
                                        data-lineheight="['30','30','30','20']"

                                    >{slide.caption}</div>

                                    <div className="tp-caption tp-resizeme btn-theme bg-navy-blue rev-btn"
                                        id="slide-82-layer-5"
                                        data-x="['center','center','center','center']"
                                        data-hoffset="['0','0','0','0']"
                                        data-y="['middle','middle','middle','middle']"
                                        data-voffset="['140','140','140','140']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                                        data-type="text"
                                        data-responsive_offset="on"
                                        data-frames='[{"delay":750,"speed":1000,"sfx_effect":"blockfromleft","sfxcolor":"#ffffff","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                        data-textalign="['inherit','inherit','inherit','inherit']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[30,30,30,30]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[30,30,30,30]"
                                        data-fontsize="['14','14','14','14']"
                                        data-lineheight="['16','16','16','16']"

                                    >Learn More <i className="icofont-rounded-right"></i></div>
                                </li>
                                // <li data-index="rs-3045"
                                //     data-transition="zoomout"
                                //     data-slotamount="default"
                                //     data-hideafterloop="0"
                                //     data-hideslideonmobile="off"
                                //     data-easein="Power4.easeInOut"
                                //     data-easeout="Power4.easeInOut"
                                //     data-masterspeed="2000"
                                //     data-thumb="rev-slider/assets/images/datcolor-100x50.jpg" d
                                //     ata-rotate="0"
                                //     data-fstransition="fade"
                                //     data-fsmasterspeed="1500"
                                //     data-fsslotamount="7" data-saveperformance="off"
                                //      data-title="Intro" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                //     <img src={slide.img} alt="" 
                                //     data-bgposition="center center"
                                //      data-bgfit="cover" 
                                //      data-bgrepeat="no-repeat"
                                //       data-bgparallax="10" className="rev-slidebg" data-no-retina />

                                //     <div className="tp-caption NotGeneric-Title tp-resizeme"
                                //         id="slide-3-layer-1"
                                //         data-x="left" data-hoffset="60"
                                //         data-y="center" data-voffset="-120"
                                //         data-width="['auto','auto','auto','auto']"
                                //         data-height="['auto','auto','auto','auto']"
                                //         data-transform_idle="o:1;"
                                //         data-fontsize="['70','70','70','45']"
                                //         data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                                //         data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                                //         data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                                //         data-start="700"
                                //         data-splitin="none"
                                //         data-splitout="none"
                                //         data-responsive_offset="on"
                                //         style={{ zIndex: "1", whiteSpace: "nowrap" }}><span className="slider-small">Ready For Any</span> <br />Obstacle
                                //     </div>

                                //     <div className="tp-caption NotGeneric-Title tp-resizeme"
                                //         id="slide-3-layer-2"
                                //         data-x="left" data-hoffset="60"
                                //         data-y="center" data-voffset="10"
                                //         data-width="['auto','auto','auto','auto']"
                                //         data-height="['auto','auto','auto','auto']"
                                //         data-transform_idle="o:1;"

                                //         data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                                //         data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                                //         data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                                //         data-start="1400"
                                //         data-splitin="none"
                                //         data-splitout="none"
                                //         data-responsive_offset="on"
                                //         style={{ zIndex: 2, whiteSpace: "nowrap", fontSize: "18px", lineHeight: "30px" }}>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,<br /> lorem quis bibendum auctor, nisi elit consequat ipsum, nec <br />sagittis sem nibh id elit.
                                //     </div>

                                //     <div className="tp-caption BigBold-Button rev-btn "
                                //         id="slide-3-layer-3"
                                //         data-x="left" data-hoffset="60"
                                //         data-y="center" data-voffset="100"
                                //         data-width="['auto']"
                                //         data-height="['auto']"
                                //         data-transform_idle="o:1;"
                                //         data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;"
                                //         data-style_hover="c:rgba(255, 255, 255, 1.00);bg:rgba(41, 46, 49, 0);bc:rgba(255, 255, 255, 1.00);cursor:pointer;"

                                //         data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power3.easeInOut;"
                                //         data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                                //         data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                //         data-start="2100"
                                //         data-splitin="none"
                                //         data-splitout="none"
                                //         data-actions='[{"event":"click","action":"jumptoslide","slide":"next","delay":""}]'
                                //         data-responsive_offset="on"
                                //         data-responsive="off"

                                //         style={Styles.tpCaption}>READ MORE
                                //     </div>
                                // </li>
                            ))
                            }

                        </ul>
                        <div className="tp-bannertimer tp-bottom" style={{ height: "7px", backgroundColor: `rgba(255, 255, 255, 0.25)` }}></div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Slider;

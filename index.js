import React , {Component} from "react"

class Landing extends Component{
    render(){
        return (
            <div class="wrapper with-image ">
            <div class="flex-wrapper">
                <div class="flex-top-name">
                    <div class="top-name">
                        <a >
                            Zizah:v
                        </a>
                    </div>
                </div>
                <div class="flex-content">
                    <div class="content">
                        <p>
                            Materi pembelajaran 
                            <b> "LATIHAN FLEX"</b> 
                            dibuat oleh
                            <b>
                                XI RPL 1
                            </b> 
                            pada minggu ke 2
                        </p>
                    </div>
                </div>
                <div class="flex-form">
                    <div class="flex-parent-input-form">
                        <div class="flex-input-form" >
                            <input type="text" class="input-form" 
                            placeholder="Masukan email kamu"/>
                        </div>
                    </div>
                    <div class="flex-button-form">
                        <a href="" class="button-form">
                            AMBIL AKSES
                        </a>
                    </div>        
                </div>
                <div class="flex-scroll">
                    <div>
                        <small>
                            Menggulir kebawah
                        </small>
                    </div>
                    <div class="flex-arrow-bottom">
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="opacity">
            </div>
        </div>

        )
    }
}

export default Landing;
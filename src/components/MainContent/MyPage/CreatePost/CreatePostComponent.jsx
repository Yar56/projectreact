import CreatePostSass from "./CreatePost.module.sass";
import React from "react";
import {addPostActionCreate, updateNewPostTextActionCreator} from "../../../../redux/postReducer";


const Create = (props) => {

    let createPostElement = React.createRef();

    let createPost = () => {
        props.dispatch(addPostActionCreate());
    };

    let onPostChange = () => {
        let text = createPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={CreatePostSass.create}>
            <div className={CreatePostSass.photo}>
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJsAmwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwIBAAj/xABDEAABAwMCAwUECAMGBQUAAAABAgMEAAUREiEGMUETIlFhcRSBkaEHFSMyUrHB0UJy8BYkJTOS4UNistLxJjRTY6L/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AYYyMJx1qylGTg86jZSK6febiMKedOEpHvJ8BQcz5KITBUrKlnZCBzUaBurahtOT7xKbYCuZV8kpH7VFeb2xaYxul1AU8oER4wO5/YeJrNpUm78Vy3JDupxLYUoISCG2k46eFAw3Xj9ZKo9gjpaTy9od3UfMDpSu+7cbo/qlvuvrIxlStWKL2rhtLqkKfXsoZ0IH60zotDcVtJjsICQRqK1BJI9f9qBShWF1z7+fhvRyJw01sktKUsb4IxvRxE63MABcxlJBGrSQfyqAcRWeM84ptT7ylKJOlA9KDlvh0oyfZ20pTudRG1XIticWEqQw1gjOdt/Oq6uK46m1BNtmOJV4J6VYicU9k02BaJ5QNgVZO3ltQTr4fW3hbsRrGe6QRuc1D/Z72iUptmCe1aA1aTsPDfNW1cXRF6DKt05AbWFJOjkoda6Txlao81UuO48hTuO1adb0hW33gehoF+58JSs5LUlvG+QnKfXagHY3e0ul6FIdb0q/4ZI+R50yPcaXQSSpK0Os6ipCFo5DpyIq8xxixdlIh3W0tKLxCO0a5gk7f1mgoWP6UbhCcDN6YEhGRlaAErSPMcq03h3im1X5omBKQpY+80dlp9RWfzuDrTPuhisvvx1DWVhSQpQCTzxzwSRzoBe+B77w0oz4LinG2zr7eOohaR4kc6DfxyCgMjFeoWlXTB86yHg36VFMqTE4jwUg49qTtj+cZ+dayy9HnR0SIjqHELGpKkEEKHrQSTIzc+Kph1PmlQ5g9DQZM9UQezvNLU433SUp2NGmnCduoNSqabWdSm0knrigQ2gBnY0D4huLEUOypi8RIQB0jm46RsP686OLV2SFLPJKSazq6R3eJb43bCrEGCO3mKH8TqsnT8NvjQA24Vy4xmvXWcVMRE/dJ6JH8KR5dTTK2ymPaHUM4baRHUQUgg4CTz8aF3biBTKWbLZEa3CSkuNp1aRncJ9Aedd3e9ohRTHh9moI7jilnXqGMYzy9QKCvabhc7hqRYrcUqAAefOOYHUnYVJOYiNn/ANQX0rdxn2eKC4R5FXIfClFy6S1NKjpeWhgqz2SDgE+fjX0WG/IWkMDu9VHlQMzV7scTuwrKJCv/AJJTmc+6pTxZPdyY0WGwOf2bQ5e+u7JwiiW6EuqUs9UpyMDrvThB4MgtEBUVO3MrUTQIy+KbyrKkTtI8EoSP0r7+0l7JH+IPgj/lFalH4dgMhKTEZG+xDYq83ZLaBlcVkk//AFigyMcUX4HC7g4rqNSU/tUn9sbnsJCI0hJwD2jIzitZc4dsyyrtIDKieoRQu4cCWKSFKSw4wo7fZq5fGgzYX23ysJl2ZhBOAVx1aCPdU6VWNbrb0G4yoLyMaEut6kg+OoUdnfRmsEm3TkK/Cl0EH4ilK9cOXKznRMiqbTnZY3Sr0NBonBdwmyLw8u5y2pfYRdLDjYB1JUrfOP5RTU/NjRoxdckIQVL0JW6dkknl8hX5+YkSITyXIzjjS9u8lRHhTBG4xXLjqg8RNrlw1c1tnQ6k9DnrQaVd+B7ZxBCbefbREuBRqU9GwUqPiQNiKS4z/Ev0azkpkp9qta1b6Dls5PMfhPlVqyy7lBCn+Ern9aQ2xlcB7/PbA593OT6imixcSWniFTrEtPYPup0vRJIACjjHX8qBrst5iXyA3Pt7wWhWM55g+BHQ0ZS7lIrJZlmlcF3JV44eDrttVvMggklKeqk+OPjWiW25xbjAYmRHwth5AWhQXjINAp3Z3sra6rywfTr8qy2fOct1lQGFn2u6jt3iBhQC1Egeu4HpWh8XPBm1EJISScDrvy/WsselKfuMmee8YwwyD1VyR8Bv7qDhGq3n6vjECc6D7XIB/wAlPPQk+nM+6h121srDGrCcBWnVkDI2xR602gs29qaH1uuyk50tkZQNW+/n19KCXrCpso5z9qrG/htQQ2aOiRJdceH2DDZcUPHwHxrQ+HOGH34rbshWgEbDG5oJ9HFuMp/U42VM6i4snlhPIf6iD7qfL7cXGG2YMJYbkvJJKgM9kjxx488fGgvsm22FnLzyG1L8T3lddhz+VfDiZghPYRJjqPENBIP+oiluHHYYUVIRrcX95xZ1KUfEk0QDycArVkAeFAVTxG4vH+GS8Dr3P+6p0cTxACJLUhrr3mifyzQz2pJSCNsjHhXCEF0BPwyKBpgXSFKOGpKFn8Od/hz+VWysBJGc4PSlVFnRIGHU5V+Ijl6VKiFdoSR7JLS8hPNh7f4K5igPbgKOTjHWqU1hi5xVRJydTa+fQpPiK5t89Ml72d5Ko0vBwy7trx+E8lfnUk+O4gZWCk+VAiTeB0+1qRHfGgJJysdP/NJ974fn2hOqUyoIUcBaRlJ8614uaFg77fOp0lh6IuLLbS4wrcJO4xQYJGlPQn0PRXlsutnKVNqwRTixeYfESEG8/wB0nZDbV1aTjKvwugf9VU+MOE3LW4qVEGuIo5O27ZPj41JwnatVqnTJPZ9i41pbbVv3s7K8uZoHDh/imVarkizcUpAdT3GpBOUqB5ZPIp8/dUs7gdxUt1dru8mJEWrW2w0vCUZ3OPLJNJluliXHHD99UfZ9WIcw7mM4RyJ6pPh+23f9pOJbITbFqd1Rjo3Tq+fUeFAS+k2S4hiOoPuIAeDQQnGF5GVZ9KRberLK0E7qeI+CM/qacvpMZU9b4JRjuOuOHfxIA/OkNlxaWnC3jtG1JeT5gc6Avw1JeaQ1EB2WpeEYPPByPTIFeWa1/Xt4fZfUsjClq0Dcqz/XwqG2BKuIG3WgS2NLowdhqwD+ZrRPowtqGIEyapH2rslYCj+FJx+YNBxwLCdstmmieoNpQoE5GMDSCc/GqqXVSX3ZihpckqCgk80J/hHwojx5I9ktbENKv/fy++rPJA3I+QFLc69NoSns0d1O6lHagOtIJPdA1VbREUsZbScHpS1A4tgp7pSrVjBJGwo/EvbTobXHWMeGKAj7CpsDXt4A0QhxcJyoZxtQh67qecBTnCTirwvSGYpyNSsb+NAZjhOnvbDpXTriQkHcn86QH+L7oFFEWKMA7EpNQKvl3kLDrra9KegTig0NIYkDRJSlxCuQPMengfOozdU2yQzCuyy7EkHDExe+lX4HD+R69d+a3Bvp1IQ/rSo4+8nGKZZDEa8WxyJJSFMPJwfI9DQWplrbWkuRzjb7vjQbvN6QvIwTgVT4QvsqHd3eGrqorfYyI7ytitA5A/pTfPiJeZU4lpKnAMkY5/1zoFSUHLg061GYEhWMKQrZPv8AIUipt0q32S5qcUfZ0up07nIOohQx032rX4NpajFfYuE688xyNKPENhfjtXVmQ3qjy1FaFfw74JHrkfOgzdKEu2SUFbvNPBBx1CgSD7iD8aNWzjdbFvYZlx47zyE6VOOJyo45ZPpiluFq0S23AsrQlOfcSOVVJMVaX1BG6eaSBnY0GhcYqaXaNDhHad0JB8O0Gaz9iH21zjpjlKUlka9+uBq/MU0/SI92XsyQopw8tJHQ7hX6UM4BgLn3B95R+ybwCrHnyoKTDa40m4JKOz7BTScA52JKv0rYeGWBHtDbSTurKvic1k09QXLvSxtqktc+gAWB+Va1w05rt0ZRznsE0Cv9ICTIvVhhqOlK0PE455wKBXly22iOn+7odd6J55OPE0f49SpHFFgd5AodGfh+9UXbfHXIVJWkuu7Y8EjyoFi1rk3WQG2Y0dCyCtKUNgnHv5micN92K92DzYRhWMjb4+FEW2RHUXorGl0DZSdsiqEllTkrtnCQs7qJ3z60DvaWI8pICuZwTXPFdsFut/bMBSgVAKHPHnXHDGooRzO/M02vJTIy0sJW2eh5GgxzXKkPFJdWgJxqS2dgPCrggznICXokmQJIXjsXdwRucg49B5703XPh8h9TsRTaNQ5acYqgYcqPp1OpAJ5gZ/rrQCYyOIowT7ZD7do9WgFKFOlll9o2EpSpGdtChgo91D4Lj6hp160A88Y+dHIyFDSSCTjn1+NAjcUvG3fSDAmasbtaiegPdrWEufZZB8+dY99KasXOKvGlYYG/Pko1p7cjFobc5FTaeviKC+0suyFKRnudB1NVuKFj6mdPpmp4v2UdKlDClb+tUuJO9aH09FDNBiMdIF+mJI7qxkD3ihqbnJjDsULGlBIGRV8FTN+eKlY+yJqgYkh5S3GmiUKUcH30Dd9IlrkzWn3Y6NfsznaqQOZBSM1a4Pbaj22R7KoKQtwK7vIZSCR7ske6i99uES1SHpM5xQaLSQrSkk55dPdQnhCSw63cRG/yi+VoGMHB5fpQJr5JcvCDgK+zWPcpR/WtU4NfDtpjLSeaE/kP3rKbwkxuIJLWFYWko+Z/T86ffo6la7O0j8PM/L9KC5x212k60PAY7NbqeXikftVBSHS2lsgZ586M8YpCmoK8k6JONj4oP7VQLncJG5IIoB3ZupO69vGqZGtwgEqOfhVyTMy52SMFeNx5VSTNjwkR3Xj33FZUnHI5oHLhphSUoScg+lHlOhlek8ztilmBfI4Zdda1KATqw2nJqvC4wDr4Q9bJW5wFKazsffQF5txQJhaeOhY+6M8x41VecbeGD3wehoNxOp5ye3LbQptojSCRg71Q+sXWFpDgISeSqBuhsYOEkDGwotpITgEjHhS9b7gH2w4NsedE2X+07qSrFAifSetP1lHT4Rxn3k1o8dJ+roDBByUJ9+AKy36QFmXxOyyDg/ZNY9T/AL1qinMSoDQxgE0BV1ZBSkYISOtU+ICTa3MHB09KkUrU4fXlQPjm5+w21lDagHHF4P8AL1oMhlOf44sAAnQRjxrTrDw+23Z4qXsdpoyrfHM5pH4PtS7zxA5LdSfZWVZKuij0FaiZkWOeyW6UqTtp8KBavcBq4PSYryT9q2Cg+CsEA0ncFSTDuq4z40h0FCunfG36CtCuaS28zIAOkd1Zxy8/68aym/KfhcXScuKIDvbNAbDcZH6igM8d21TEuPOSnurOFKHQ4r76NbiGpYhrV3XQrR6hX7GmpKGOJLEWlf5hSOf8K+hx5/rWZvplWGQjOUPR5BKSRzGP6zQbBxUgPWRxSMFbBS9y6JO//wCSaV3pCkRtYH8OfWr6+LYztlYfZQp19aMKaxkAAgKCvLBoAzJQiE8p1pxMVAOlas8vDPU9KCe3hLDRcfSVOujPoOgrp1DaykhsZT90kcqAruci5zmxBjbpICGgdRV8Kvu3N+M6uO5AW2+2oIWlw7pOM4NBacjrYPaRytpahzQrGaK8OqfA763CR+I5zQsSbwWFuuWtKm2/vYIynbPwxV+DF4kddaDTbDCXe8NStht191AyhCnmyiQkKSrnnrSpxDH+rnUtlOWXfuFXjRN928W61LmTLlGSW1qSG0M5O2eR91JN6vMq59l7S+4txO6kbac+CQKA1aXno0oNHVoWO6VU6W5wBAORz+FKVgkRr1H9okOIiGMQ2lJBUFZGc56cqOFtSW3G2JbKitOEFAJznbNAmqcVdeOmFYOn2rUf5UnOflWnynezuUZwnYJOKU+GuHXIBVLU4gylZQFfhTnp60euL6GoofddQBHSSs56CgPokNoQt51QShIJ1VmPEEyTxFdQzDSSVOANp/CkdTV+6XeXf+wh25tXYrSlRA8xzNHLTbonDkHtFnW+v7xJ3WfLyoJrZEjcM2VMVoI1gFRPVaupPlQJye6pxZ7NJyonKlbmorpc3Jr6iSNx8B+1TRLXOfjtuttp0KGRqO586BjWdYwobYwfSlbiWxMS5TKUhYedSQ24nGoAb6T4gUz5NUZq8Xm1Y8Hf+kUCrw47KtqVMrRh6OtSVI5dqjOceozt60Xvtkh8U2/tY6wiQBhK8dR0PhUnFcNTK27kySAAGpAG2PwL9x29FUCjyLlAjIubcTLbiSVezq1Z36p9M0Cwhubw7OUxMY06lYDh5H/zR+YDc7Y8wHCCUBbac7eIxTBFuln4jhFuUEL724X0PhnpQufwRIRodtE1OhtWpth7cenp60CTAmSbZORJjLLTzZPqKnVKkTZSpUl1anlKypedzVqda7gZbirmyY7mdj2eEKHkoUQj2aIoNEPElI72Nwr9qAsyucuIv+8tkOJ7wVjPLFfGfcNTeu46NH3dB93SqcphnUns1kZ5eVVexShWV6jg8s0BCXcnGrbKZdaEhLyChSlqOoZz3h55pOdWtKClYOOeRTSlY7yCkHbfbnQ6W2y1uGAArkTy9KCxwy4y1CU2lLyiValltoqSnwFXhPiyHNDchsFaglBPIY5nf+tqXYEa7e0KFpEkBfMtbA++mGxcGuJ1u3FtslWMJPe0edAQduFuYQUmaytadj3skn0qs3brlxD2iAlUO2qA3V/mOD06D1omY9ltB7bs2luJH3gASNvlVaZcbrcWV+z6bZC/ikPEZI/5R1+VAbiG3WKMGIQSpxIwMqyMjxPX0pfus6RIKnFu5Ofu6vgPIeVUZjzCkMeyOreSkFKnFpwSoHcgdOdFLHw+uWUyLgC00TkN9V+tBPw5aVT3PaXgfZUkHJ/4h8PSnPtAnu7ADbHhUbQQy0lCNICRsMbVQefIdV+9B2o4BONvGqE1I9vtruRstadvNB/arLqlIjuFsalIScDxOKzB6/XCOiKtyYt19hwrU27/AAnPI9eW1BrJSl5hbbgCkLThSVdRSHxCmfw1dUuWwuriOIClpJ1gEcyR8PjTBwle13u3e1OMdidejAOQrHUVavraXDEXgatRSfMEZ/SgW37y3JsJkrjMNqUrCdO2le+Tjr61Rtl/mtxVOAFSU4A7IZ/1Dlg887UbfscCTHcacYAS6rUSk4KVeI8KDMcL3C3Pq9geC2ljmTpUn1oCcLi9KxiQ0gDbOf6xRFq5WKYSXWGSrPgAflSpLRNZX/fYAdA5q04z7x+tQD6tcPfaksE9UqCx8xt8aBxci2NSyUBSCeelR6+VetW21Z2dczy+/wDKk1aGG1IXHmLUsKBAU1zxvjY1cly+IIriU9ip1KhkKQ3kf1mgZZrNlaUNRJJ/Es0PeutijY0MtqUDjJwT8SaAcSiaRHcuCUof0lJCf4eRAPnzoJsSNQ69TQOkji5psBMdk6DyOOR8txQmVxNNkLS4Nm9RyFftyoOhGRhKVEk8xRSHEuBGllDaUdW3wClQ9OdANlTX5L4dUpWGzlWThOfACvOyn3XS0ypbiQO6P4EDw8BypujcNsr0vSQ2vbAbZGhCfHA/3om40zCiFsICUlBwEjGKBdsTH1cg9rh55LgSkgZCScZ9+fHlTLKmyDb3VQk5Ugd1KVYLiuuD+tLdofLr7ynlNNBSdYBOClJGMj0xv61cuN6iwEtR4igoHZKgOgoL1qvchi8Nwny4WX0AAOnKkLxv7s1PNmASnAByPnQJN1TKWC1FSp1tYUhw88iiSZLLo1yEFDqvvAY50A2Zx03GuLzHsLi22VlOtDgBOPKu/wC0PDd90tTmkpKtv7wgAg/zCkOWNM1wj8Z5710+2gd4JGaDYrTDiw4qGoKEoYAynCsg53JzSzJ4zgybimMULaaacP2ysYURt05Ckdu7XFiOYbM19uPz0IWR8+dUkbqJO+Mneg2iNIbebStpSXEkZ1A5GKua0qxsKxmBPlxHGzGkON5O4Sdj7q02zSnpENtbzhWojmfWgNgJOc79agfhQnx9rGaV6p3r0E8s7Z/auCTzoB03hy3PIw2x2asc0rI/WhUnhVLilBuW+hRThOHDgbeHhTO4SfftXFAoo4bmKaS1KkNuaDkbnFTi1xLeAl9tDi87qAyED96PKGlKtO3P8qCuJDyWUO95LkgBYJ+8N6DiCS/JU7CjpEZKCEOPd1Lhz08qvNQ1vyMvtNEK2+zcO3uwKkcPe0jZI2AG2K4yQUkHfUKCqqc7AlOx0unbosb49KKJfQ9C7RRBODjNThpuU0gyEJcKmzkqG+xpeXtFQATg560C/c5DTD0V0pUENjC9BwU42yP26586ocQXJMuWyWA2oNJ0h1O3adc46V3fVEKAB2Udx47VRW0j6kS7jviQUg55DFA32IobtrKst6tKlK7wz0q9LfSmQoZ6Dl6Cki0nJVnwpgRuhJO5xQf/2Q==" alt=""/>
            </div>
            <div className={CreatePostSass.text}>
                <input value={props.state.profilePage.newPostText} onChange={onPostChange} ref={createPostElement} type="text" placeholder="Добавьте что нибудь" />
                <button onClick={createPost}>Добавить</button>
            </div>
        </div>
    )
};

export default Create;
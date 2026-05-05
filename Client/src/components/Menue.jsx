import { useState } from "react";

function Menue() {
    const [open, setOpen] = useState(false);

    const image = {
        bar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADx8fFzc3PExMRgYGD5+fnY2Njs7Oz09PQpKSng4OCLi4tlZWVwcHCDg4MYGBg5OTm3t7ednZ18fHxHR0eZmZmpqanU1NRaWloRERFUVFQcHByUlJQzMzNCQkJNTU0obsVYAAACk0lEQVR4nO3djXKiQAzAcUREFMQPqFC11fd/yp7Xdu46c5PdA2YyCf/fEyTjLotLdpMkAAAAAAAAAAAAAAAAAPCUp1bkA7JbN229W1mxq9tm/X/51cfDwpbDsY7PMd9ftOMd5LKPTLB41w51sG0RlaB2mKNEpJi+aAc5yj0NZthqxzhSG0ow22qHONI2kxPMa+0IR6vl5T87agc42lH+Ec/a8U3gLGa41w5vAuK6X+60w5vATloT16/a4U3gVXo/XV+1w5vAVcqwXGmHN4FVKWSYLrXDm8BSfHGrtMObQCUlmHQ37fhGu3VihqX9R81VmoYuhqk8SJNk89COcKTHJpBhcrI9Ew+nUIJJ0mgHOYr82v09Fa1tJP5xCU3CL91dO9KB7vJC8Ze+sjgZb1Ufm+CvJ2rfWHumPpo++BT9IS+Kss+s6MuiGPJ1BgAAAAAAAAAAmJCeqqUd1Slc/fzDprNXKrzt4r895ZnNT6Tvp8jvT8WbdqiDvUWdt0gtl3rXMdPRdplwGx6ototNFosmlODaerH+MXSCzfYYfQocYOttn3p6epFrTqzPwid5JtovvgyUXxaW18JvtbTsly7OW0hFwjM4b+H+N/Q/D/0/S2ewHvp/p/H/XjqD/xbmZ2Lw/6H1cbqP2Izyv0/jf69tBvulif8979+cf7cAAAAAAAAAAAB2eL8natOffd/15f6+ts5qPUbsnXvu7020XW4Scfel+/tL/d9Ba7/8MjAV/d8F7f8+b/uDNDBM/d+r7783gv/zFv57lPjvM2O8QPiTXMruv9+T/55dDvquLQMbNu57582g/+EMelj670M6g16yM+gHnPjv6fxUmuvLHWhk9U++e6sDAAAAAAAAAAAAAAAA8OgDOXpj7f/efNIAAAAASUVORK5CYII=",
        arrow: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8BAQEAAAD4+Pj39/f7+/v09PTp6enl5eUYGBgRERHx8fEaGhohISEPDw/g4OCurq7R0dFWVlYoKChBQUHNzc06OjojIyN9fX21tbUyMjJ5eXmDg4NQUFClpaXAwMBkZGQ1NTWXl5c/Pz9JSUnGxsaPj49ra2uamprZ2dlcXFxK6+RbAAAQbklEQVR4nO1dCXvbKBCVudxYjuMjju3czSbbpv//By4zgIUkQIAcOe7q7bZfGlsaPa4BNI8pihEjRow4H4Q4q3nKvtoCn06/2kQQX26e0/KLLYTBSvrFFijl/ItNBM1z+sXmRSF4VkdglMH/Pc1TeZ8siowJab67+rkQPK8KGWeCy4frN0rBPbLsS/OMS4Zd5uH2sgozTDB4Lln4LK8BaGSbx2KhtNs8lZDFmF4P7FjwfShSqAWWYV5eePwpaF5WtHxUXiYXIkMLXP+c21A5lG2+efOz37xkL1jWOMNk8+RCVj8+W25flJbBvEh2FtiA5DAnuHoYr3l4MpHTyJQFfMjq38lA8znli2MvXsa0eU8ZyUKQt2fp5S9HUNNCC6ptJt8E2oAc51jEeO80zzvNyw4oO3nWnBDdi74pA4Msw6EJ2cbyhlFkqM1TbAruJkSxFedYUFNlfVdZTPLH9CqE8YH621f4WqsOKbhz102gj8svinyGqg9gl8johbJxgjNLb6LKaKFHAGXeeRMBo4PInXKppi0vF4JndUIGrZvlNG682phnUEG+oYpBR8+dcR9LRniLsOsOaD5zTXEcO7CEnBzklLXIbqJwU22D5xFkONsSOQNwpPmSU+np+6wKKDXuKKMZQOtmRW4TVeaRF/USlDPRoueqU80GaU4NCoFDXNHnAVQJU08fhDbCaYajr9uAm+cM9rCilB6t57YCUvT4QfiwRx84Alp6zkjF4bKyt31ZR97yBVd7in0LWADnXFYWrOzVRI15vzOVhZ89ip4AtKT9W1CnjS820GX+qwmOGDFixIgRI0aMGDFixIgRI0aM+J+As5vty2EJOLxsf5xzY+/04Kvlw3pB6lisH5arv4Em/3i81ZwmE0Ku5Z+rCf6IuH38uGiW5fNac0NIgsgTKerfSKyfz7tVmw2+vLXYIZ8d/pNYFDXL2+Xl1eTNvkHP1CD+NJ80PiJkf3PuR07Cat2gZxOc1BpqRXK9OvdjR2P11OJXJ9hsqIbj02Vw/PHa5tcg6KYIHF9/nPvxu/Gvg1+757kpAsd/z02gA9trBz/tB5twUYSvbs9NIoS9i59qogrzzf3mKkhRfvvx3DS8uNm5K1Di5/55e1M59vJm+7z/ac8GahdsvqnnWDo7ICHvv31D5Or3u5MkIctBnzwSD64RlKwP4QgWcWi7TrjwYaCnjgd/b7t4cv0WM+Ms3+aO+cH7N5vHTZtjKEw2X6Ivf7ltcpTFc17dVQM37Tq4+0i6w8dd+xbfaLz5bFXA7JB8k8OsdZdvQ7FZg9Kj0YJOUzsSfzwlxekJ5ZPT5oNdf8rflhnd6PO6STG7L4rp6RSavP5YhPwqdOh8Bl4ba8rr3IDlQIBkshLhvUEQnTXlNCuEr3gmtZkOec+5CYSBeotYoFJCxNN8aKyKPpUFmqfjpcXnZnF/P6s2crJcPyi3PP0QJF0Y7h77fPWpGtlBx+GUl3kR6aA+m94uru6uKorpEzgBIaB+guaHuAesD6PkDgoGZD34X/KjqQhXcUcW/1gUUwdUMC88ElQrkDyS4qZG8BavUeK3DLG70Q/S2xrFTeJdCiF9FXP2EmRlomyjGuq+XoOKoOQmyzC9CtE8hyGA1mtxn3QXMM/c2kBsovCBVvB11+LWbqNkpzU5StyXQVApbMG82FkUCUnYoJIXM+GpHlqJz7SCr5Oh7Qm1d8YOIDIG0rp5OYtY3B0rcZdwF9BuCXflaLVCUf3dxfDfGkF0EwyEKaLI8BSsMg/VvyJXPyuvGLs9hdHqqEJ1flqJeCm05k5ZwY9aG33GC7ksqLz5DI5yhqHsRc+baheHkLhNRsHB01Nv94IHU+RxmOjshq82wV9ogYEbFF5pD/389C+JoQ2ZxgM3+GXf/rXjWRAMZzLcO0SqcxpgtGB+AZ+Flb2HfY0WGPQm5iMBawdC1h73pmoeNYy6fK1ervtAGFSA7iegkdZtiwkapx98aj4Ax9MUvG5C3OtNRPd+qHbRVBwbUK0InzoJ4oEKQRE6N/puFqUArdl/NFcK74kdkqApDuczHM1X8rpHuwwjPAZMZYKDnGnALEo/uLbMz+TXy7KU47T3oIAjQTMotWDm6pV5urBs/Ak/Di1B+cbL8Ciuz1rgMfpBa0JKyAHXJEWgBC2C3oflRkB4LN+DbSQ4PaUCZ0Od8kk11/GPthas+Rq5A/kiXOU96UHY81f4vtu8csmW+TvLSmjuRnEaFSMPhXVrlI6T2qX7USA34ZUvsvoE/Zf3rnCggt2APmwzgceCFsRF1KpW+rMof720Cve2QBl46R1kWG2fAxu113xjNnxr2QksFOX4K51U3EwqculrW4aNX9kPvHNR2tjI8TVSZb5eSi+NkvSZAPHiSQ8HK63Wg85eulFfJ+Q/6wQXSftnc6uZBl4R4FB6SjxbRfumfuUbf+ldneAs7T32W1wzjW170XiKK1kJ1iC4S9wBtTZjybrHEyeCRpult/WNnOvk8Kd13Gh6YnxYTSf4gkI20bk9MZmnx3fZo3bay54+eLTKNbThxGUTtSiSWUYAm7Day3Av+CtfEdyTZjiKkiu9v0smWRF673HGTgpuFetv/9eMo9e1SGZ5b4N+W7GNQ3XEldVI/SvTaiaDFHP6oLZW7fEPFRW2rB6deL9kT7aBYvooakBmpicPFqLxYAzOJz993xH1yfZikx8le09mpicn7Q33wNr0r5nXpL0enGT5wQp7QhaK4lA+n6tGAwQ9y/WTEoQpom6oZDbMUMNULDMQ9OwqNQnuegVyb8lEU/Rs8ZwcN4agb2uh3gelH1xNfwDU380fK3jKASM9VEON3BnuCyzTORp0TrvrK/rJxBF46YNz914t1ZCip82cGi9EE5SP7vi4seC1mZqr3GGXGJXo6mjK5UNDJfFhVn1wIPpR3QyffARhAgeu30tw4hktTYi/dBrpgUg5WBqCslLan376CSrXHyLoniQdXyQuBnL5y+M0yvUC+neIIVAMEXRPdHd9whZyUIVfkPv2p49hhmQ3C3/BsUKqRq7BGB4NptYhNNGrRWodnpOhsx+GetkVCBMCFIP9cDCGB2vB5vj4yU9RC/MCFENjaXgz+ZQ4ELOJmeoP9SBzXPW3azDgD3EsHcYfbslMU3TPaWj+nObNZc9sP8OsZpg5zQ0xFD3zUtaYeC8+y2kMQvNSRXCgealcW2iKw60tNMGB1hawPjQUB1ofmon3QOtDXOMritFr/D61uK8WT0Pt6z+o9bakSPz7NDZF2ZF67dNogsPt0yz1agakLt4vWatEdPQ99tqqfZqh9tpWZjUzDwWB0GrCDH6wx36pITjcfiknFUWnB1MwFLWjz93zfqsIDvfyyby3kMvu0KsEfDlarQfJJIvie7VYG+y9RbVCksaD757+qSlFM989VZv6w717+rAGkeBcWFK0F7w5fdGOGhru/SGPfwf83vcd8J+zvAOuvXoOP7Osxbrrv4z3+K5YDB+aFK++JhYjB6Ej6O14Gsc6vwbeDDeJq0UdjBkZT5OFYHq+ZkxUCJXrV9/3zvQc5u2YqFP7Cm+ME6IZ1xZEnWLcVoQ2bzXxU+9gCH9AOIA3YhPDoJGxiTXzwDA2NjEDEKwZnIE04kuPgOwEbVFXbdUfDN3TdymUbskKiYtbV2CemojoSs7Kru81Y4TNo3HhVDzExAhX5oVOdxMfI1yZx3D6zq0AFpGerxbnXaXM86Xn647ztr6rzafEeSMwxlk+Qqe8U2AcbUdmOFesfpUhoy0L64rVt81TihrP1Fj96pHDgwh4opjsgC29RS1C21mLCh3PSjHvEy/rZRgxn7HrJFg/QrZlSICWrJnBeoOcP1rc16SoNDN/OvqTbJ9gXjbSeasIg0BSx+yA3E9RYHq+mIwoNd3Tays7oCOlDQ/pnmrmWev2XUBKVnZA70gJOW1oXLaYpnatmZ4vJ3eUzg4ozT/bN484ecASF2p5mpuhwESskc/W1h8eswNC0H96Yh4QKIP5hugpSn9YT78I5t255UB7Ep99sqYhhdNWjAkQIebktcLsgNC8aydRRGlIscq0moj7sgOivJQWZfRpCLYOmEzeS21C5ZPMSdzFlYoYdMB284jZYuPHLJ1KBefJDgjiupTuY3uszRy03Ax9WR7BY3bAenx/3PaMUi1jQmkjZGwD8tSyIim5m7Xtu9loPX6UPtMFVCTBlKS2aI7U4x912dxbgyVDdV2ajr6anpLJ3ZzcCW0hJ3ke1eZFTYISe6aC0S9yr7hQjqIob0t8tmWd4m7qT88XREmpNj9tqKRi9y50AkRvExWQvk5kHBTwUKcIo0JOHwQvgeZX9c25hLNNuHGJbjE+Crm9IuUQrFh6pPickSEOF6P413PjCJ6UrQtcUviOgoDsvSIvg6R1xhAhd7v5LmIJ37qHwJVd3zOGOPcdp4Dp+eKklQ7YW5qT+/sFuU5+RQS5xiXBVd9zoqCWfJ9Rv0CyE7X1PiHqrK80wFJGnPSsL4eN9HTtR7SPM1ukboxxtvzG57X9D87c639u4j/f/dxEz9mX87eYp5xexNmXRfb5pcs/F3J+aRE4g/bNewbt20WdQSvHm437oGtJ4n7/vLX2aMrP7fMe996uXBX4Xc8RLtxnQVsnQUtCu011FrT88txF8PueBS2xdRwHbc5jr8VZ4geTdg0SsvvuR887zmRvHjlvft0m6JPNfC84ztUnEwfFNkF53es3c4IefLZyIzg6XIsguaz8D00n16rFJkHY778cfoBmjpJGX6wThK9eWI4SQCPPDFB0EsRJwQXmmUGUSytXkFWLx26Jn66XF5orSMHK90R0riBVgwqXnu9Jg6+W+/WsIa2Yrfd/R86uIzj7sX05HP7OvGsjRowYMWLEiBEjRowYMWLEiBEj/r/wHSNyUhvDnNLhRjmAdTHNy553GuPpUfTf0oYXDIK5vZ9mxS+7bOQlz8sI3WwBk775I/gwlj0zP2MFsJEVykkhOWGOFqWC4CX1pc5D3ZiKtu9FkQZtBC8USLBDNxcECPuYV85SZQfMDsU0NnKCOY+Ks4AuqwuYqoT54kwt5j1qkWF6vkAsqw8Wrw4BYcA4LTGO1n25UoBqxYw3nLgLFMK1hUivBaxB0wcjlK4ugEAblSm+T1FZx73quhgwbSO5fJR+kKs/HRpJH0D9WtDSM1CyZnbATo2l2wbIgP2p17zAJhqhrguBCUwt6TOOTdfWD+Y4NIZjYdYoU0lBVONJ78eYOo/7uxerGMo2JrK0CRRt5AjzlOJMZwfEfLbJNxGY5yhwHSr2rPR8Gd0QpPhBGyGgHESbr7SECcZBxE9lJ/R+gx81ZzQut1z7GVHYGLIRvBozAxrz6SMV+Plw6ZrEbsqX5NRDt40A1EEY4C2yahDHYBE2fhyes/WDaCN76mwmozyHYFmWQk0WQzBOlmY1USGNdNsIwEpOmEwQMthC2rCu65gpvowaBOUgi7ARgKbok9cFjcNcPca7qazKOUnDGabny1wSGiiKLD2BGkwRmYiaobBmer54G5iKu+eyEmSWORNS8PNlZL3QnIMCCqUBLfuvz3kgmW/osjIuLSUiI2N4so3QfdLnasp83+YTYaN3E+1nfgDjvbd2RowY8ffiP1KdjgZDDhPEAAAAAElFTkSuQmCC"
    }

    const styles = {
        container: {
            width: "30px",
            margin: "20px auto",
            position: "fixed",
            left: open ? "-220px" : "20px",
            padding: "10px",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 12px rgba(10, 10, 10, 0.1)",
            borderRadius: "12px",
            display: "inline-flex",
            alignItems: "center",
            position: "fixed",
            top: "97px",
            left: "20px",
            zIndex: 1001,
        },
        button: {
            background: "transparent",
            border: "none",
            cursor: "pointer",
        },
        image: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        },
        sidebar: {
            position: "fixed",
            top: "115px",
            left: open ? "8px" : "-220px",
            width: "200px",
            height: "100%",
            backgroundColor: "#acc294",
            color: "white",
            paddingTop: "80px",
            transition: "0.3s ease",
            zIndex: 1000,
        },
        logout: {
            position: "fixed",
            bottom: "20px",
            left: open ? "8px" : "-220px",
            width: "200px",
            height: "40px",
            backgroundColor: "#b18989",
            color: "white",
            border: "none",
            cursor: "pointer",
            transition: "0.3s ease"
        },
        link: {
            display: "block",
            padding: "12px",
            color: "white",
            textDecoration: "none",
        }
    };

    return (
        <div>
            < div style={styles.container} >
                <button
                    style={styles.button}
                    onClick={() => setOpen(open ? !open : !open)}
                >
                    <img
                        style={styles.image}
                        src={open ? image.arrow : image.bar}
                    />
                </button>
            </div >

            {/* Sidebar */}
            < div style={styles.sidebar} >
                <a href="/profile" style={styles.link}>Profile</a>
                <a href="/progress" style={styles.link}>Progress</a>
                <a href="/tasks" style={styles.link}>Tasks </a>

                <div style={styles.logout}>
                    <a href="/" style={styles.link}>Logout</a>
                </div>

            </div >
        </div >
    );
}

export default Menue;
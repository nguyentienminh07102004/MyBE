// alert("Tôi là bậc thầy múa Florentino");
// Ex1:
    // let x = 5, y = 3;
    // console.log(x + y);
    // console.log(x - y);
// Ex2: Hãy tưởng tượng một hình tròn nằm giữa và có hai hình vuông: một hình vuông nhỏ hơn và một hình vuông lớn hơn.
// Đối với hình vuông nhỏ hơn, thì hình tròn là ngoại tiếp.
// Đối với hình vuông lớn hơn, thì hình tròn là nội tiếp
    // let S = (radius) => {
    //     // Nếu là hình vuông lớn thì bán kính của hình tròn là 1 / 2 cạnh hình vuông nên:
    //     let Smax = Math.pow(2 * radius, 2);
    //     // Nếu là hình vuông nhỏ thì bán kính hình tròn là 1 / 2 đường chéo hình vuông nên:
    //     let d = (2 * radius) / Math.sqrt(2); // cạnh của hình vuông nhỏ
    //     let Smin = Math.pow(d, 2);
    //     return Smax - Smin;
    // };
    // console.log(S(5));
    // console.log(S(6));
    // console.log(S(7));
// Ex3: Kiem tra chuoi palindrome
    let palindrome = (s) => {
        let Snew = s.split("").reverse().join("");
        return s === Snew;
    }
    console.log(palindrome("cimtic"));
// Ex4:
    

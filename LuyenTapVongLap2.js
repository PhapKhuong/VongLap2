function sumNum1()
    {
        let count = 0;
        let sum = 0;
        for (i = 0; count < 30; i++)
            {
                if (i % 7 === 0)
                    {
                        count += 1;
                        sum += i;
                    }
            }
        document.getElementById ('result6').innerText = "Tổng 30 số đầu tiên chia hết cho 7 là: "  + sum + ".";
    }

function sumNum()
    {
        let sum = 0;
        for (i = 1; i <= 30; i++)
            {
                sum += 7 * (i - 1);
            }
        document.getElementById ('result6').innerText = "Tổng 30 số đầu tiên chia hết cho 7 là: "  + sum + ".";
    }

function toPrint()
    {
        let str = '';
        for (i = 1; i <= 100; i++)
            {
                let t1 = i % 3;
                let t2 = i % 5;
                let t3 = t1 || t2;
                if (t3)
                    {
                        if (!t1) str += "Fizz" + "<br>";
                        else if (!t2) str += "Buzz" + "<br>";
                        else str += i + "<br>";
                    }
                else str += "FizzBuzz" + "<br>";
            }
        document.getElementById ('result7').innerHTML = str;
    }

function guessNumber()
    {
        let num1 = +prompt ('Nhập số thứ 1');
        let num2 = +prompt ('Nhập số thứ 2');
        let rand = Math.floor(Math.random()*(num2 - num1 + 1)) + num1;
        let x;
        let count = 1;
        while (true)
            {
                x = +prompt ('Hãy đoán một số bất kỳ trong khoảng bạn vừa tạo và nhập số đó vào đây!');
                if (count === 3)
                    {
                        if (x !== rand) alert ("Bạn thua! Đáp án là: " + rand);
                        else alert ("Chúc mừng bạn!");
                        break;
                    }
                else
                    {
                        if (x > rand) alert ("Số bạn vừa chọn lớn hơn đáp án. Hãy chọn một số nhỏ hơn!");
                        else if (x === rand) 
                            {
                                alert ("Chúc mừng bạn!");
                                break;
                            }
                        else alert ("Số bạn vừa chọn nhỏ hơn đáp án. Hãy chọn một số lớn hơn!");
                    }
                count += 1;
            }
    }


function toCal()
    {
        let num = +document.getElementById('number_2').value;
        let fac = 1;
        if (num - Math.floor(num)) document.getElementById('result2').innerText = "Hãy nhập một số nguyên dương";
        else
            {
                if (num <= 0) document.getElementById('result2').innerText = "Hãy nhập một số nguyên dương";
                else
                    {
                        for (i = 1; i <= num; i++)
                            {
                                fac *= i;
                            }
                        document.getElementById('result2').innerText = num + "! = " + fac;
                    }
            }
    }


function printTri()
    {
        let str1 = '';
        for (i1 = 1; i1 <= 5; i1++)
            {
                for (j1 = 1; j1 <= i1; j1++)
                    {
                        str1 += "*";
                    }
                str1 += "<br>"
            }
        document.getElementById('result3_1').innerHTML = str1;

        let str2 = '';
        for (i2 = 1; i2 <= 5; i2++)
            {
                for (j2 = 1; j2 <= 6 - i2; j2++)
                    {
                        str2 += "*";
                    }
                str2 += "<br>"
            }
        document.getElementById('result3_2').innerHTML = str2;

        let str3 = '<table>';
        for (i3 = 1; i3 <= 5; i3++)
            {
                for (j3 = 1; j3 <= 5; j3++)
                    {
                        if (j3 > 5 - i3) str3 += '*';
                        else str3 += '&nbsp&nbsp';
                    }
                str3 += "<br>"
            }
        document.getElementById('result3_3').innerHTML = str3;

        let str4 = '<table>';
        for (i4 = 1; i4 <= 5; i4++)
            {
                for (j4 = 1; j4 <= 5; j4++)
                    {
                        if (j4 >= i4) str4 += '*';
                        else str4 += '&nbsp&nbsp';
                    }
                str4 += "<br>"
            }
        document.getElementById('result3_4').innerHTML = str4;
    }

function printRec()
    {
        let str = "";
        for (i = 1; i <= 7; i++)
            {
                for (j = 1; j <= 20; j++)
                    {
                        if (i === 1 || i === 7 || j === 1 || j === 20) str += "*";
                        else str += "&nbsp&nbsp";
                    }
                str += "<br>"
            }
        document.getElementById('result4').innerHTML = str;
    }
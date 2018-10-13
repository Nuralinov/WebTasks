var a = document.getElementById('determinant');
a.addEventListener('click',findDeterminant); 


function findDeterminant() {
            var s11 = document.getElementById("s11").value;
            var s12 = document.getElementById("s12").value;
            var s13 = document.getElementById("s13").value;
            var s21 = document.getElementById("s21").value;
            var s22 = document.getElementById("s22").value;
            var s23 = document.getElementById("s23").value;
            var s31 = document.getElementById("s31").value;
            var s32 = document.getElementById("s32").value;
            var s33 = document.getElementById("s33").value;
            var determinant1 = (s11*s22*s33) + (s21*s32*s13) + (s31*s12*s23);
            var determinant2 = (s13*s22*s31) + (s11*s32*s23) + (s33*s12*s21);
            var determinant = determinant1 - determinant2;
            console.log(determinant);    
            document.getElementById('result').innerHTML = determinant;
        }
      
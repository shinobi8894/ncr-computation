// javascript Code for Dynamic Programming |
// Set 9 (Binomial Coefficient)
 
   // Returns value of Binomial
// Coefficient C(n, k)
function binomialCoeff(n , k)
{
 
    // Base Cases
    if (k > n)
        return 0;
    if (k == 0 || k == n)
        return 1;
 
    // Recur
    return binomialCoeff(n - 1, k - 1)
        + binomialCoeff(n - 1, k);
}
 
/* Driver program to test above function */
var n = 5, k = 2;
document.write("Value of C("+n+", "+k+") is "+binomialCoeff(n, k));
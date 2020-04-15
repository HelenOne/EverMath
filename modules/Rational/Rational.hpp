#pragma once

#include <cmath>
#include <cassert>
#include <iostream>

// change it
template <typename Int>
Int gcd(Int a, Int b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}


namespace emath {
    template <typename Int>
    class Rational {
    public:
        Int num;
        Int den;
 
        Rational(Int num_, Int _den): num(num_), den(_den) {
            reduce();
        }

        Rational(Int z): num(z), den(1) {
        }

        Rational(): Rational(0, 1) {
        }

        Rational(Rational const& r) {
            num = r.num;
            den = r.den;
        }

        Rational(Rational&& r) {
            swap(r);
        }

        bool isInt() {
            return den == 1;
        }

        Int asInt() {
            assert(isInt());
            return num;
        }
        
        Rational operator=(Rational r) {
            swap(r);
        }

        Rational operator+(Rational const& right) {
            return Rational(num * right.den + den * right.num, den * right.den);         
        }

        Rational operator-() {
            return Rational(-num, den);
        }
        
        Rational operator-(Rational const& right) {
            return *this + (-right);
        }

        Rational operator*(Rational const& right) {
            Int gcdad = gcd(num, right.den);
            Int gcdbc = gcd(den, right.num);
            return Rational((num / gcdad) * (right.num / gcdbc), (right.den / gcdad) * (den / gcdbc));
        }

        Rational operator/(Rational const& right) {
            assert(right.num != 0);
            return *this * Rational(right.den, right.num);
        }

    private:
        void reduce() {
            if (den < 0) {
                den *= -1;
                num *= -1;
            }
            Int g = gcd(num, den);
            num /= g;
            den /= g;        
        }
    };

    template <typename Int>
    std::ostream& operator<<(std::ostream& out, Rational<Int> const& r) {
        return out << '(' <<  r.num << ',' << r.den << ')';
    }
}


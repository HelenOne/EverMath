#pragma once

#include <algorithm>
#include <cassert>
#include <iostream>

// change it
template <typename Int>
Int gcd(Int a, Int b) {
    a = std::abs(a);
    b = std::abs(b);
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}


namespace emath {
    template <typename Int, typename UInt>
    class Rational {
    public:
        Int num;
        UInt den;
 
        Rational(Int num_, UInt _den): num(num_), den(_den) {
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
            UInt gcdad = gcd(num, right.den);
            UInt gcdbc = gcd(den, right.num);
            return Rational((num / gcdad) * (right.num / gcdbc), (right.den / gcdad) * (den / gcdbc));
        }

        Rational operator/(Rational const& right) {
            assert(right.num != 0);
            return *this * Rational(right.den, right.num);
        }

    private:
        void reduce() {
            UInt g = gcd(num, den);
            num /= g;
            den /= g;        
        }
    };

    template <typename Int, typename UInt>
    std::ostream& operator<<(std::ostream& out, Rational<Int, UInt> const& r) {
        return out << '(' <<  r.num << ',' << r.den << ')';
    }
}


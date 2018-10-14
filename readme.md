
## Notice: this is homework 1 for nccu ethereum class fall
## StudentId: 104703030 資科四 于子傑
```
yarn install
```

### 1. Please compare hash function and cryptographic hash function and give an example.

```
所有的cryptographic hash function 都可以稱作 hash function
但是並不是所有的 hash function 都是 cryptographic hash function

cryptographic hash function 需要有以下特點
1. Deterministic: 同進同出 same input same output
2. Quick： 計算快速
3. 函式不可逆
4. 對於message 有一點小變動期結果就會有很大的變化
5. Collision resistant：無法找到兩個不同的 message 但產生相同的 hash
6. Pre-image attack resistant

以下將以這幾種hash function 舉例
md5 => rainbow table attack, 並且已經失去了 Collision resistant
不是 cryptographic hash function


sha3 => 目前沒有已知漏洞，為 cryptographic hash function
```

### 2.a => 2.a.js
```
privKey:  f7cebd0e727d43c14173fefc01bc9459162aca17696e607b0772ebed65c66ada
pubKey: 72c97af4854c8b4ea81ba7f6b307bae59d387627971d23ea9f9296916d68c766d25342a8e319c6a175d3c34e2e560bb31d307f75d6296524f48ab0caa17ada7b
address: 0x0x80b565a45aa3f1ac0370deb3aa3fc3b12905975f

```

### 2.b => 2.b.js
```
0x2bcb3a599aa846b049fd6d442bcae282fce989b7
```

### 2.c Can you generate a Keystore with the password “nccu”?
```
No
```

### Bonus

#### What is RFC 6979 for? 
```
定義  Digital Signature Algorithm (DSA) 以及 Elliptic Curve Digital Signature Algorithm (ECDSA) 之文件，並說明了兩種算法的細節以及所需參數，還有key 的長度
```
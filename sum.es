# Computes the sum of 2 256 bytes integers and return it as a 256 int

push1 0x00
calldatadownload
push1 0x20
calldatadownload
mul
push10x00
mstore
push1 0x20
push1 0x00
return

6000356020350260005260206000f3



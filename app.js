let web3js

window.onload = () => {

const portis = new Portis('f832ed08-1076-42c2-a927-20cbd8bfc9ae', 'core');
const web3 = new Web3(portis.provider);

    web3js.eth.getAccounts((error, accounts) => {
        console.log(accounts);
    });

    const Address = "0xBA2241f9Fe4bB9FFdc50447BD2B75079073397c5";

    //remixのボタンを押して取得したABIを貼り付け
    const ABI = [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "n",
                    "type": "uint256"
                }
            ],
            "name": "setnumber",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "get3",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getnumber",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]

    mycontract = new web3js.eth.Contract(ABI, Address);

    console.log(web3js.version)

    mycontract.methods.getnumber().call().then((fromblockchain1) => {
        window.alert("getnumber value is " + fromblockchain1);
    });

    document.getElementById("bt").style="visibility: visible;"

}

sendTX = () => {
    let n = window.prompt("input number to write blockchain")

    if (n) {
        web3js.eth.getAccounts((error, accounts) => {
        mycontract.methods.setnumber(n).send({ from: accounts[0] });
        })
    }
}

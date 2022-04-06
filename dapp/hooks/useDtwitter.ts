import Dtwitter from './Dtwitter.json'
import {ethers} from 'ethers'
import {useState, useEffect} from 'react'

const contractApi = Dtwitter.abi
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
const Ethereum = typeof window !==  'undefined' && (window as any).ethereum


const getDtwitterContract = () => {
    const provider = new ethers.providers.Web3Provider(Ethereum)
    const signer = provider.getSigner()
    return new ethers.Contract(
        contractAddress,
        contractApi,
        signer
    );
}



const userDtwitter = () => {

    const [currentAccount, setCurrentAccount] = useState<string>('');
    const [currentUser, setCurrentUser] = useState<string>('');

    const connectWallet = async () => {
        try {
            if (!Ethereum){
                alert("Please install metamask")
                return
            }
            const accounts = await Ethereum.request({method: 'eth_requestAccounts'});
            if (accounts.length === 0){
                console.log("No authorized accounts")
            }
    
            const account = accounts[0];
            console.log("Connected to this account ->", account)
            setCurrentAccount(account);
            
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if(!Ethereum){
            console.log("No ethereum wallets found ")
            return;
        }
        connectWallet();
    }, []);

    useEffect(() => {
        if(currentAccount){
            getUser();
        }
    }, [currentAccount])

    const getUser = async () => {
        const contract = getDtwitterContract();
        const user = await contract.getUser(currentAccount);
        console.log(user);
        return user ? user.name : null;
    }

    return {connectWallet, currentAccount}
}

export default userDtwitter
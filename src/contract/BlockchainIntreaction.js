import { createPublicClient, http } from 'viem';
import { baseSepolia } from 'viem/chains';
import { isWhiteListAbi } from './IsWhiteListJson.js';

const whitelistContractAddress = "0x23E0023A4BbCC7C5e3D6Cb63c0Cd6d5fc431959f";

export async function CheckWhitelistStatus(userAddress) {
  try {
    if (!userAddress) {
      console.error("User wallet address not provided");
      return null;
    }

    const client = createPublicClient({
      chain: baseSepolia,
      transport: http(),
    });

    const isWhitelisted = await client.readContract({
      address: whitelistContractAddress,
      abi: isWhiteListAbi,
      functionName: 'isWhitelisted',
      args: [userAddress],
    });

    return isWhitelisted;
  } catch (error) {
    console.error("Error checking whitelist status:", error);
    throw error;
  }
}

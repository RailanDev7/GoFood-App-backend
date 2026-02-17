
export const otpCodeGenerate = async () => {
    try {
    return `${Math.floor(1000 + Math.random() * 9000)}`
    } catch (error) {
        
    }
}

const dados = otpCodeGenerate();

console.log(dados)
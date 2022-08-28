import "./style.css";
import React from "react"
import Plans from "../Plan";

export default function PlanItem() {
    return (
      <div className="plan-row">
        <Plans 
        periodogratis="3 meses grátis com a assinatura"
        title="Individual" 
        subtitle="R$ 19,90" 
        qntdcontas="1 conta" 
        vantagemUm="Ouça músicas sem anúncios" 
        vantagemDois="Ouça em qualquer lugar — até no modo offline"
        vantagemTres="Escolha a música que quer ouvir"
        vantagemUquatro="Faça um plano pré-pago ou uma assinatura"
        termos="Somente no plano Individual. Depois, é só R$ 19,90/mês. Sujeito a Termos e Condições. Disponível apenas para quem nunca usou o Premium. Oferta válida até 11 de setembro de 2022."        
        />
        <Plans 
        periodogratis="1 mês grátis ao assinar"
        title="Duo" 
        subtitle="R$ 24,90" 
        qntdcontas="2 contas" 
        vantagemUm="2 contas Premium para um casal que mora junto" 
        vantagemDois="Ouça sem anúncios, no modo offline e sob demanda"
        vantagemTres="Faça um plano pré-pago ou uma assinatura"
        termos="Sujeito a Termos e Condições. O mês grátis não está disponível para usuários que já experimentaram o Premium."      
        />
        <Plans 
        periodogratis="1 mês grátis ao assinar"
        title="Família" 
        subtitle="R$ 34,90" 
        qntdcontas="6 contas" 
        vantagemUm="6 contas Premium para familiares que moram no mesmo endereço" 
        vantagemDois="Bloqueie músicas com conteúdo explícito"
        vantagemTres="Ouça sem anúncios, no modo offline e sob demanda"
        vantagemUquatro="Spotify Kids: um aplicativo separado, feito especialmente para crianças" 
        vantagemCinco="Faça um plano pré-pago ou uma assinatura"
        termos="Sujeito a Termos e Condições. O mês grátis não está disponível para usuários que já experimentaram o Premium."      
        />
        <Plans 
        periodogratis="3 meses grátis com a assinatura"
        title="Universitário" 
        subtitle="R$ 9,90" 
        qntdcontas="1 conta" 
        vantagemUm="Desconto especial para estudantes universitários que tenham direito à oferta" 
        vantagemDois="Ouça músicas sem anúncios"
        vantagemTres="Ouça em qualquer lugar — até no modo offline"
        vantagemUquatro="Escolha a música que quer ouvir" 
        termos="Oferta disponível somente para estudantes universitários de instituições de ensino superior aprovadas. Depois, é só R$ 9,90/mês. Oferta não disponível para quem já usou o Premium. Sujeito a Termos e Condições da oferta de desconto no plano Universitário do Spotify. Oferta válida até 11 de setembro de 2022."      
        />
      </div>
    )
};

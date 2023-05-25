const express = require('express');
const app = express();

// Rota molecules
app.get('/molecules', (req, res) => {
    const molecules = [
    {
      "name": "metano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=297",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=C&image_size=300x300",
      "dad": "1 - Combustível: O metano é amplamente utilizado como uma fonte de energia na forma de gás natural. É utilizado para aquecer residências, gerar eletricidade em usinas termelétricas e como combustível em veículos movidos a gás natural comprimido (GNC). 2 - Culinária: O metano é uma parte essencial do gás natural usado em fogões e fornos domésticos. É uma fonte de calor eficiente e confiável para cozinhar alimentos. 3 - Aquecimento doméstico: O metano é usado em sistemas de aquecimento residencial, incluindo caldeiras e aquecedores de água a gás. Ele fornece calor rápido e eficiente para aquecer ambientes e água.",
      "formula": "CH4",
      "id": 1,
      "classe": "Alcano"
    },
    {
      "name": "etano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=6324",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=CC&image_size=300x300",
      "dad": "1 - Combustível: O etano é usado como combustível em certas situações. Embora não seja tão comum quanto o metano, o etano pode ser usado como combustível para veículos ou como fonte de energia em áreas onde o gás natural rico em etano é abundante. 2 - Matéria-prima na indústria petroquímica: O etano é uma importante matéria-prima na indústria petroquímica. É usado na produção de plásticos, como o polietileno de baixa densidade (PEBD) e o polietileno de alta densidade (PEAD). Esses plásticos são amplamente utilizados em embalagens, filmes plásticos, recipientes, tubulações e muitos outros produtos. 3 - Refrigerante: O etano também é usado como componente em refrigerantes e sistemas de refrigeração. É um refrigerante eficiente e tem sido utilizado em certos equipamentos de refrigeração e sistemas de ar condicionado.",
      "formula": "C2H6",
      "id": 2,
      "classe": "Alcano"
    },
    {
      "name": "propano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=6334",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=CCC&image_size=300x300",
      "dad": "1 - Combustível para aquecimento e cozinha: O propano é frequentemente usado como combustível em sistemas de aquecimento residencial, fornecendo calor para casas e edifícios. Além disso, é usado em fogões, fornos e churrasqueiras a gás, proporcionando uma fonte de calor eficiente para cozinhar alimentos. 2 - Energia portátil: O propano é uma opção popular para fontes de energia portáteis. É usado em cilindros ou tanques para alimentar geradores de energia, lanternas, aquecedores de acampamento e fogões de acampamento. Sua portabilidade e facilidade de armazenamento tornam-no uma escolha comum para atividades ao ar livre e situações de emergência. 3 - Veículos movidos a propano: O propano também é utilizado como combustível em veículos, como carros, ônibus e vans. Os veículos movidos a propano, conhecidos como veículos de combustível alternativo, têm emissões mais limpas em comparação com veículos a gasolina ou diesel. Essa opção de combustível pode ser particularmente útil para frotas comerciais ou serviços de transporte.",
      "formula": "C3H8",
      "id": 3,
      "classe": "Alcano"
    },
    {
      "name": "butano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=7843",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=CCCC&image_size=300x300",
      "dad": "1 - Combustível para isqueiros e fogões portáteis: O butano é amplamente utilizado como combustível em isqueiros descartáveis, bem como em fogões portáteis para acampamentos, piqueniques ou outras atividades ao ar livre. Devido à sua alta densidade de vapor e facilidade de ignição, o butano é uma escolha popular para essas aplicações. 2 - Gás de isqueiro recarregável: Além dos isqueiros descartáveis, o butano é usado como combustível em isqueiros recarregáveis. Esses isqueiros possuem uma válvula que permite a recarga do butano líquido, proporcionando um suprimento contínuo de chama. 3 - Aerossóis: O butano é frequentemente utilizado como propelente em produtos em aerossol, como desodorantes, sprays de cabelo, inseticidas e produtos de limpeza. Ele cria a pressão necessária para liberar o conteúdo desses recipientes em forma de spray.",
      "formula": "C4H10",
      "id": 4,
      "classe": "Alcano"
    },
    {
      "name": "pentano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=8003",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/8003/png?record_type=2d&image_size=300x300",
      "dad": "1 - Solvente: O pentano é usado como solvente em várias aplicações. É comumente encontrado em produtos de limpeza, como removedores de adesivos, removedores de manchas e desengraxantes. Devido à sua capacidade de dissolver gorduras, óleos e outros compostos, o pentano é útil na remoção de sujeira e na limpeza de superfícies. 2 - Aerossóis: O pentano é utilizado como propelente em aerossóis, como sprays de cabelo, desodorantes e produtos para cuidados pessoais. Ele permite que o produto seja expelido em forma de spray. 3 - Combustível: O pentano também pode ser utilizado como combustível em algumas aplicações. Embora não seja tão comum quanto o metano ou outros hidrocarbonetos, o pentano pode ser usado como combustível em motores de combustão interna em situações específicas.",
      "formula": "C5H12",
      "id": 5,
      "classe": "Alcano"
    },
    {
      "name": "hexano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=8058",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/8058/png?record_type=2d&image_size=300x300",
      "dad": "1 - Solvente: O hexano é amplamente utilizado como solvente em várias indústrias e processos. Ele é eficaz na dissolução de substâncias gordurosas, óleos, graxas e resinas. Por exemplo, é utilizado na indústria de tintas, vernizes e adesivos como um solvente de limpeza e diluição. Além disso, o hexano também é usado como solvente em laboratórios químicos. 2 - Extração de óleos vegetais: O hexano é utilizado no processo de extração de óleos vegetais a partir de sementes oleaginosas, como soja, canola e girassol. O hexano é um solvente eficiente para extrair os óleos dessas sementes, deixando-os livres de impurezas. O óleo extraído é amplamente utilizado na indústria alimentícia para a produção de óleos comestíveis, margarina, maionese e outros produtos. 3 - Limpeza de peças e componentes: O hexano é usado como um agente de limpeza em várias indústrias e processos de fabricação. Devido às suas propriedades de dissolução, é eficaz na remoção de sujeira, graxa e óleo de peças e componentes industriais, como peças metálicas, componentes eletrônicos, instrumentos de precisão, entre outros. O hexano é um solvente volátil que evapora rapidamente, deixando as peças limpas e secas.",
      "formula": "C6H14",
      "id": 6,
      "classe": "Alcano"
    },
    {
      "name": "heptano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=8900",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/8900/png?record_type=2d&image_size=300x300",
      "dad": "1 - Combustível para motores: O heptano é frequentemente usado como um componente em combustíveis de alta octanagem, como a gasolina premium. Ele ajuda a melhorar a eficiência e o desempenho dos motores de combustão interna, reduzindo o risco de detonação e batida de pino. 2 - Solvente: O heptano é um solvente orgânico eficaz e volátil. Devido à sua baixa polaridade, é utilizado em laboratórios e indústrias como um solvente para a dissolução de compostos orgânicos não polares, como gorduras, óleos e resinas. Também pode ser encontrado em produtos de limpeza, removedores de adesivos e tintas. 3 - Referência em cromatografia gasosa: Na área da análise química, o heptano é usado como um padrão ou referência em cromatografia gasosa. É frequentemente utilizado como padrão interno ou solvente de calibração para determinar a concentração de compostos em amostras.",
      "formula": "C7H16",
      "id": 7,
      "classe": "Alcano"
    },
    {
      "name": "octano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=356",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=CCCCCCCC&image_size=300x300",
      "dad": "1 - Combustível para veículos: O octano é um componente essencial da gasolina, que é o principal combustível usado em veículos de passeio e em muitos outros meios de transporte. O octano na gasolina ajuda a fornecer energia para os motores de combustão interna, permitindo a locomoção de automóveis, motocicletas, caminhões e outros veículos. 2 - Geração de energia: Em algumas situações, o octano pode ser usado como uma fonte de energia para geradores e motores estacionários. Em locais onde o acesso à eletricidade é limitado ou em casos de emergência, o octano pode ser utilizado para alimentar geradores e fornecer energia elétrica temporária. 3 - Solvente: O octano também é usado como solvente em várias aplicações industriais e comerciais. Ele é eficaz para dissolver óleos, gorduras, tintas, adesivos e outros produtos químicos. O octano é frequentemente utilizado em processos de limpeza industrial, produção de tintas e vernizes, além de outros setores onde a dissolução de substâncias é necessária.",
      "formula": "C8H18",
      "id": 8,
      "classe": "Alcano"
    },
    {
      "name": "nonano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=8141",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/8141/png?record_type=2d&image_size=300x300",
      "dad": "1 - Combustível: O nonano é usado como combustível em certas aplicações, principalmente em motores a combustão interna. Por exemplo, é adicionado à gasolina em certas proporções para melhorar suas propriedades de combustão, como octanagem e estabilidade. 2 - Solvente: O nonano é empregado como solvente em várias indústrias. Sua natureza apolar e sua capacidade de dissolver uma ampla gama de compostos orgânicos o tornam útil em processos de limpeza, desengraxamento e remoção de resíduos. É encontrado em produtos de limpeza doméstica, tintas, vernizes, adesivos e produtos de cuidados pessoais, como removedores de esmalte de unhas. 3 - Intermediário químico: O nonano é usado como intermediário em várias sínteses químicas. Pode ser convertido em outros compostos, como ácidos graxos, ésteres, álcoois e aminas, que são usados na produção de alimentos, produtos farmacêuticos, detergentes, lubrificantes e cosméticos.",
      "formula": "C9H20",
      "id": 9,
      "classe": "Alcano"
    },
    {
      "name": "decano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=15600",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/15600/png?record_type=2d&image_size=300x300",
      "dad": "1 - Combustível para veículos: O decano está presente em frações dos combustíveis derivados do petróleo, como gasolina e diesel. Esses combustíveis são amplamente utilizados em veículos para transporte diário, permitindo a locomoção e a mobilidade das pessoas. 2 - Lubrificantes: O decano também está presente em óleos lubrificantes, que são utilizados em motores de veículos, máquinas e equipamentos industriais. Esses lubrificantes ajudam a reduzir o atrito entre as peças móveis, prolongando a vida útil e garantindo o bom funcionamento desses dispositivos. 3 - Produtos químicos e plásticos: O decano pode ser utilizado como uma matéria-prima na indústria química para produzir outros compostos orgânicos. Além disso, os derivados do petróleo, como o decano, são frequentemente utilizados na fabricação de plásticos, que são amplamente presentes em diversos produtos do nosso cotidiano, como embalagens, utensílios domésticos, brinquedos, entre outros.",
      "formula": "C10H22",
      "id": 10,
      "classe": "Alcano"
    },
    {
      "name": "etino",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=6326",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/6326/png?record_type=2d&image_size=300x300",
      "dad": "1 - Soldagem: O etino é amplamente utilizado na soldagem oxiacetilênica. Nesse processo, o etino é misturado com oxigênio para produzir uma chama de alta temperatura, que é utilizada para fundir metais e realizar a soldagem. A soldagem oxiacetilênica é comumente utilizada em oficinas e indústrias para unir peças metálicas. 2 - Iluminação: Antigamente, o etino era usado como combustível em lâmpadas de acetileno. A lâmpada de acetileno consiste em uma câmara contendo carbureto de cálcio, que reage com água para liberar o gás etino. A queima do etino produz uma chama brilhante, fornecendo iluminação em locais onde a eletricidade não estava disponível. 3 - Indústria química: O etino é uma matéria-prima essencial para a produção de uma variedade de compostos químicos. Ele é usado na síntese de compostos orgânicos, como plásticos, resinas, solventes e produtos químicos industriais. O etino é particularmente importante na fabricação de polímeros como o polietileno e o PVC (policloreto de vinila), que têm uma ampla gama de aplicações em embalagens, tubulações, revestimentos e muito mais.",
      "formula": "C2H2",
      "id": 11,
      "classe": "Alquino"
    },
    {
      "name": "propino",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=6335",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/6335/png?record_type=2d&image_size=300x300",
      "dad": "1 - Soldagem e corte: O propino é amplamente utilizado na indústria metalúrgica para processos de soldagem e corte. Quando combinado com oxigênio, o propino produz uma chama quente que pode atingir temperaturas extremamente altas. Essa chama é usada para fundir e unir metais durante a soldagem, além de cortar peças metálicas. 2 - Iluminação: O propino foi historicamente utilizado como uma fonte de iluminação antes da ampla adoção da eletricidade. O gás era queimado em lâmpadas especiais chamadas 'lamparinas de acetileno', que produziam uma luz brilhante e intensa. Embora seu uso como fonte de iluminação tenha diminuído atualmente, o propino ainda é usado em algumas aplicações especiais, como em minas subterrâneas. 3 - Síntese química: O propino é uma matéria-prima importante na indústria química. É utilizado como um reagente em várias reações químicas para produzir uma ampla gama de compostos orgânicos. Por exemplo, o propino é utilizado na produção de plásticos, solventes, produtos farmacêuticos, borrachas sintéticas e muitos outros produtos químicos.",
      "formula": "C3H4",
      "id": 12,
      "classe": "Alquino"
    },
    {
      "name": "butilino",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=7846",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=C%23CCC&image_size=300x300",
      "dad": "1 - Em indústrias químicas, butilino é utilizado na produção de solventes, plásticos e borrachas. 2 - Em hospitais, butilino é utilizado como anestésico. 3 - Na indústria alimentícia, butilino é utilizado como conservante em alimentos como carnes, peixes e frutas.",
      "formula": "C4H6",
      "id": 13,
      "classe": "Alquino"
    },
    {
      "name": "pentino",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=12309",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=C%23CCCC&image_size=300x300",
      "dad": "1 - Pesquisa e desenvolvimento: O pentino pode ser usado como um reagente em laboratórios e na indústria para fins de pesquisa e desenvolvimento. Sua reatividade e estrutura química única podem permitir a síntese de produtos químicos mais complexos ou a investigação de determinadas reações químicas. 2 - Estudo acadêmico: O pentino também pode ser usado como um exemplo ou caso de estudo em aulas de química orgânica. Sua estrutura de hidrocarboneto alifático com uma tripla ligação fornece um exemplo interessante para ensinar sobre ligações químicas, isomeria e propriedades dos alcinos. 3 - Combustível alternativo: Embora não seja comum, o pentino pode ser utilizado como combustível em algumas aplicações específicas. Sua queima produz calor e energia, semelhante a outros hidrocarbonetos combustíveis. No entanto, vale ressaltar que o pentino não é um combustível amplamente utilizado e há fontes mais convencionais e eficientes disponíveis para fins energéticos.",
      "formula": "C5H8",
      "id": 14,
      "classe": "Alquino"
    },
    {
      "name": "hexino",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=12732",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/12732/png?record_type=2d&image_size=300x300",
      "dad": "1 - Solvente: O hexino pode ser utilizado como solvente em determinados processos industriais e laboratoriais. Devido à sua capacidade de dissolver diferentes tipos de substâncias, pode ser empregado na fabricação de produtos químicos, tintas, adesivos e resinas. 2 - Síntese orgânica: O hexino é frequentemente utilizado como reagente em sínteses orgânicas. A tripla ligação presente na molécula permite que ela participe de reações químicas diversas, sendo útil na formação de compostos orgânicos mais complexos, como alquinos substituídos.",
      "formula": "C6H10",
      "id": 15,
      "classe": "Alquino"
    },
    {
      "name": "heptino",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=12350",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=C%23CCCCCC&image_size=300x300",
      "dad": "No entanto, o heptino não é amplamente utilizado no dia a dia e não possui funções específicas comuns na vida cotidiana.",
      "id": 16,
      "classe": "Alquino"
    },
    {
      "name": "octino",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=12370",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=C%23CCCCCCC&image_size=300x300",
      "dad": "1 - Pesquisa e indústria química: O octino pode ser usado como reagente em laboratórios de pesquisa e na indústria química para a síntese de outros compostos orgânicos complexos. Sua reatividade e características únicas podem ser exploradas em processos químicos específicos. 2 - Química fina e farmacêutica: Alguns compostos derivados do octino podem ter aplicações em química fina e indústria farmacêutica. Eles podem ser usados como intermediários na síntese de produtos químicos e medicamentos específicos, em processos controlados e sob condições rigorosas.",
      "formula": "C8H14",
      "id": 17,
      "classe": "Alquino"
    },
    {
      "name": "decino",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=12997",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/12997/png?record_type=2d&image_size=300x300",
      "dad": "1 - Solvente industrial: O hidrocarboneto decino pode ser utilizado como solvente em certos processos industriais. Devido à sua estrutura química e propriedades físicas, pode ser eficaz na dissolução de certos materiais ou na extração de compostos específicos em processos de fabricação ou produção. 2 - Síntese de compostos químicos: O hidrocarboneto decino pode servir como matéria-prima para a síntese de outros compostos químicos. Por exemplo, por meio de reações químicas controladas, o decino pode ser utilizado como precursor para a produção de outros hidrocarbonetos ou compostos orgânicos mais complexos.",
      "formula": "C10H18",
      "id": 19,
      "classe": "Alquino"
    },
    {
      "name": "eteno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=6325",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/6325/png?record_type=2d&image_size=300x300",
      "dad": "1 - Amadurecimento de frutas: O eteno é amplamente utilizado para acelerar o processo de amadurecimento de frutas. Ele é liberado em ambientes controlados, como câmaras de amadurecimento, para promover o amolecimento e a coloração das frutas, tornando-as prontas para consumo mais rapidamente. 2 - Plásticos: O eteno é um componente fundamental na fabricação de plásticos. É usado como matéria-prima para a produção de polietileno, um dos polímeros mais comuns e versáteis encontrados em diversos produtos plásticos, como embalagens, sacolas, filmes, garrafas e muitos outros itens de uso diário. 3 - Indústria química: O eteno é uma matéria-prima essencial na indústria química. Ele é utilizado na produção de uma ampla variedade de produtos químicos, como etanol, óxido de etileno, etileno glicol, polímeros vinílicos, solventes e muitos outros compostos orgânicos importantes.",
      "formula": "C2H4",
      "id": 20,
      "classe": "Alceno"
    },
    {
      "name": "propeno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=8252",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/8252/png?record_type=2d&image_size=300x300",
      "dad": "1 - Plásticos e Polímeros: O propeno é uma matéria-prima essencial na produção de plásticos e polímeros. Ele é utilizado na fabricação de uma ampla variedade de produtos plásticos, como embalagens, recipientes, utensílios domésticos, brinquedos, componentes automotivos, entre outros. O propeno é um dos principais monômeros utilizados na produção do polipropileno, um dos plásticos mais comuns e versáteis. 2 - Indústria Química: O propeno é uma importante matéria-prima na indústria química. É utilizado na produção de diversos produtos químicos, como álcoois, éteres, resinas, surfactantes, antioxidantes, lubrificantes, aditivos e solventes. Esses produtos químicos têm uma ampla gama de aplicações, desde produtos de cuidados pessoais e produtos de limpeza até a fabricação de tintas, revestimentos e adesivos. 3 - Combustível e Energia: O propeno é utilizado como combustível em várias aplicações. Pode ser utilizado como combustível industrial para alimentar caldeiras e fornalhas, gerando calor e energia térmica. Além disso, o propeno é um componente importante na produção de combustíveis automotivos, como a gasolina reformulada e aditivada. Também é usado como combustível para tochas de corte e soldagem em processos industriais.",
      "formula": "C3H6",
      "id": 21,
      "classe": "Alceno"
    },
    {
      "name": "buteno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=7844",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/7844/png?record_type=2d&image_size=300x300",
      "dad": "Aditivo de combustível: O buteno pode ser usado como um aditivo de combustível para melhorar a octanagem da gasolina. A adição de buteno à gasolina pode aumentar sua eficiência de combustão e desempenho do motor, reduzindo assim as emissões e melhorando a economia de combustível.",
      "formula": "C4H8",
      "id": 22,
      "classe": "Alceno"
    },
    {
      "name": "penteno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=8004",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/8004/png?record_type=2d&image_size=300x300",
      "dad": "Indústria de cosméticos: O penteno é utilizado na fabricação de produtos cosméticos, como cremes, loções e maquiagens. Ele é utilizado como um agente condicionador e umectante, proporcionando hidratação e suavidade à pele e aos cabelos.",
      "formula": "C5H10",
      "id": 23,
      "classe": "Alceno"
    },
    {
      "name": "hexeno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=11597",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/11597/png?record_type=2d&image_size=300x300",
      "dad": "Ingredientes químicos: O hexeno pode ser usado como um componente na síntese de outros compostos químicos. Por exemplo, pode ser utilizado na fabricação de plastificantes, que são adicionados a materiais plásticos para torná-los mais flexíveis e maleáveis.",
      "formula": "C6H12",
      "id": 24,
      "classe": "Alceno"
    },
    {
      "name": "hepteno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=11610",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=C%3DCCCCCC&image_size=300x300",
      "dad": "1 - Solvente: O hepteno pode ser utilizado como solvente em diferentes setores, incluindo indústria química, farmacêutica e de tintas. Como solvente, o hepteno é capaz de dissolver substâncias que são insolúveis em água, permitindo a fabricação de produtos químicos, medicamentos e tintas. 2 - Componente de combustíveis: O hepteno pode ser usado como um componente de combustíveis, como gasolina ou diesel. Quando adicionado a esses combustíveis, ele contribui para suas propriedades de ignição, estabilidade e desempenho.",
      "formula": "C7H14",
      "id": 25,
      "classe": "Alceno"
    },
    {
      "name": "octeno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=8125",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/8125/png?record_type=2d&image_size=300x300",
      "dad": "Indústria de Polímeros: O octeno é utilizado na indústria de polímeros como um monômero na produção de polietileno linear de baixa densidade (LLDPE). O LLDPE é amplamente utilizado na fabricação de embalagens flexíveis, filmes plásticos, sacolas, revestimentos e outros produtos plásticos. O octeno ajuda a melhorar as propriedades de flexibilidade e resistência ao impacto dos polímeros.",
      "formula": "C8H16",
      "id": 26,
      "classe": "Alceno"
    },
    {
      "name": "noneno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=31285",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/31285/png?record_type=2d&image_size=300x300",
      "dad": "1 - Produção de polímeros: O noneno é usado como uma das matérias-primas na produção de polímeros, como o polipropileno. Esses polímeros têm diversas aplicações no dia a dia, desde embalagens de alimentos e utensílios domésticos até componentes automotivos e fibras têxteis. O noneno é um dos monômeros usados para criar cadeias longas de polímeros, fornecendo propriedades específicas aos materiais resultantes. 2 -Aditivo em combustíveis: Em algumas situações, o noneno pode ser usado como um aditivo em combustíveis, especialmente para melhorar suas propriedades de ignição e octanagem. A adição de noneno aos combustíveis pode ajudar a melhorar a eficiência da combustão e reduzir as emissões de poluentes.",
      "formula": "C9H18",
      "id": 27,
      "classe": "Alceno"
    },
    {
      "name": "buta-1,3-dieno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=7845",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=C%3DCC%3DC&image_size=300x300",
      "dad": "1 - Indústria de borracha: O buta-1,3-dieno é amplamente utilizado na indústria de borracha para a produção de borracha sintética. Ele é um componente essencial na fabricação de pneus de automóveis, pneus de bicicleta, calçados esportivos e outros produtos de borracha. O buta-1,3-dieno permite a produção de borrachas com excelentes propriedades de resistência ao desgaste, elasticidade e durabilidade. 2 - Polímeros e plásticos: O buta-1,3-dieno é um monômero fundamental para a produção de polímeros e plásticos sintéticos. Ele é usado na fabricação de polibutadieno, que é um polímero altamente elástico e resistente, amplamente utilizado em produtos como mangueiras, correias transportadoras, selos e vedações industriais. 3 - Adesivos e selantes: O buta-1,3-dieno é utilizado na produção de adesivos e selantes, devido às suas propriedades de aderência e flexibilidade. Ele é incorporado em formulações de adesivos utilizados na indústria automotiva, na construção civil e em aplicações domésticas, como colas de uso geral e selantes de silicone.",
      "formula": "C4H6",
      "id": 29,
      "classe": "Dieno"
    },
    {
      "name": "pent-1,3-dieno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=62204",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=C%3DC%2FC%3DC%2FC&image_size=300x300",
      "dad": "1 - Perfumes e fragrâncias: O pent-1,3-dieno possui um aroma distinto e é usado na indústria de perfumes e fragrâncias para adicionar notas olfativas agradáveis. Pode ser encontrado em uma variedade de produtos perfumados, como perfumes, colônias, loções corporais e produtos de cuidados pessoais. 2 - Síntese de compostos farmacêuticos: O pent-1,3-dieno é utilizado como um reagente na síntese de compostos farmacêuticos. É uma peça fundamental na construção de estruturas moleculares complexas encontradas em medicamentos. O uso do pent-1,3-dieno na síntese orgânica permite a produção de uma ampla variedade de compostos farmacêuticos importantes para tratamentos médicos e terapias.",
      "formula": "C5H8",
      "id": 30,
      "classe": "Dieno"
    },
    {
      "name": "hexa-1,3-dieno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=11602",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/11602/png?record_type=2d&image_size=300x300",
      "dad": "Síntese de produtos farmacêuticos: O hexa-1,3-dieno pode ser empregado na síntese de compostos utilizados na produção de medicamentos e produtos farmacêuticos. Os compostos orgânicos derivados do hexa-1,3-dieno podem servir como blocos de construção para a fabricação de ingredientes ativos de medicamentos, como antineoplásicos e analgésicos.",
      "formula": "C6H10",
      "id": 31,
      "classe": "Dieno"
    },
    {
      "name": "octa-1,3-dieno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=66084",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/66084/png?record_type=2d&image_size=300x300",
      "dad": "1 - Fragrâncias e perfumes: O octa-1,3-dieno é usado na indústria de fragrâncias e perfumes como uma nota olfativa. Ele contribui para o aroma de uma variedade de produtos, adicionando notas florais, cítricas e frutadas. É frequentemente encontrado em perfumes, colônias, loções e produtos de cuidados pessoais. 2 - Indústria de alimentos: O octa-1,3-dieno é usado como um aditivo alimentar para fornecer sabor e aroma em certos alimentos. Ele pode ser encontrado em produtos como sucos, refrigerantes, sobremesas, doces e alimentos processados. O composto é adicionado para realçar o sabor e dar uma experiência sensorial agradável aos consumidores.",
      "formula": "C8H14",
      "id": 33,
      "classe": "Dieno"
    },
    {
      "name": "ciclopropano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=6351",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/6351/png?record_type=2d&image_size=300x300",
      "dad": "Anestésico: O ciclopropano foi usado como anestésico geral em cirurgias no passado. Embora tenha sido substituído por anestésicos mais seguros e eficazes, sua descoberta e uso no campo da anestesia foram um marco importante na medicina.",
      "formula": "C3H6",
      "id": 34,
      "classe": "Cicloalcano"
    },
    {
      "name": "ciclobutano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=9250",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/9250/png?record_type=2d&image_size=300x300",
      "dad": "1 - Gás propelente em aerossóis: O ciclobutano é usado como um gás propelente em aerossóis, como sprays de cabelo, desodorantes e produtos de cuidados pessoais. Ele cria pressão dentro da embalagem e permite que o produto seja liberado na forma de spray. 2 - Refrigeração: O ciclobutano também é utilizado como um refrigerante em equipamentos de refrigeração e ar condicionado. É um substituto potencial para os hidrofluorocarbonetos (HFCs), que são gases com alto potencial de aquecimento global. O ciclobutano possui um impacto ambiental menor em relação aos HFCs.",
      "formula": "C4H8",
      "id": 35,
      "classe": "Cicloalcano"
    },
    {
      "name": "ciclopentano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=9253",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/9253/png?record_type=2d&image_size=300x300",
      "dad": "1 - Refrigerantes: O ciclopentano é usado como agente de expansão em refrigeradores e congeladores. Ele é um substituto mais ambientalmente amigável para os gases clorofluorocarbonetos (CFCs) e hidroclorofluorocarbonetos (HCFCs) anteriormente usados, que contribuem para o esgotamento da camada de ozônio. 2 - Espumas isolantes: O ciclopentano é utilizado na fabricação de espumas isolantes. Ele é adicionado a materiais como poliuretano e poliestireno expandido para melhorar as propriedades isolantes do produto final. As espumas isolantes são amplamente usadas em aplicações como isolamento térmico em paredes, tetos e pisos de edifícios, bem como em embalagens para proteção de produtos sensíveis ao calor.",
      "formula": "C5H10",
      "id": 36,
      "classe": "Cicloalcano"
    },
    {
      "name": "ciclohexano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=8078",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/8078/png?record_type=2d&image_size=300x300",
      "dad": "Indústria de plásticos: O ciclohexano é um componente importante na produção de plásticos, como o nylon-6. É usado como um intermediário na fabricação de polímeros e resinas, fornecendo propriedades mecânicas e térmicas desejadas aos produtos finais.",
      "formula": "C6H12",
      "id": 37,
      "classe": "Cicloalcano"
    },
    {
      "name": "cicloheptano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=9265",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/9265/png?record_type=2d&image_size=300x300",
      "dad": "Solvente: O cicloheptano pode ser utilizado como solvente em diferentes processos industriais e laboratoriais. Como um líquido incolor e volátil, é capaz de dissolver uma variedade de substâncias orgânicas, tornando-o útil em diversas aplicações químicas.",
      "formula": "C7H14",
      "id": 38,
      "classe": "Cicloalcano"
    },
    {
      "name": "ciclooctano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=9266",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/9266/png?record_type=2d&image_size=300x300",
      "dad": "Combustíveis: Embora o ciclooctano não seja utilizado diretamente como combustível, os hidrocarbonetos cíclicos de cadeia menor podem ser refinados para a produção de gasolina, diesel e outros combustíveis. Esses hidrocarbonetos cíclicos podem ser encontrados em frações de petróleo bruto e, por meio de processos de refino, são convertidos em produtos utilizados em veículos e motores.",
      "formula": "C8H16",
      "id": 39,
      "classe": "Cicloalcano"
    },
    {
      "name": "ciclobuteno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=69972",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/69972/png?record_type=2d&image_size=300x300",
      "dad": "Pesquisa em catálise: O ciclobuteno é usado como uma molécula de teste em pesquisas envolvendo catálise, que é o processo de acelerar uma reação química sem ser consumido na reação. Ele serve como um composto modelo para entender a atividade catalítica de diferentes materiais e desenvolver novos catalisadores eficientes.",
      "formula": "C4H6",
      "id": 40,
      "classe": "Cicloalceno"
    },
    {
      "name": "ciclopenteno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=8882",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/8882/png?record_type=2d&image_size=300x300",
      "dad": "Indústria química: O ciclopenteno pode ser utilizado como matéria-prima na indústria química para a produção de outros compostos. Por exemplo, o ciclopenteno pode ser convertido em adiponitrila, que é um intermediário chave na fabricação do nylon-6,6, um polímero amplamente utilizado na produção de fibras têxteis, plásticos e outros materiais.",
      "formula": "C5H8",
      "id": 41,
      "classe": "Cicloalceno"
    },
    {
      "name": "ciclohexeno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=8079",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/8079/png?record_type=2d&image_size=300x300",
      "dad": "Produção de plásticos: O ciclohexeno é empregado na produção de plásticos, como o poliestireno expandido (EPS), também conhecido como isopor. O ciclohexeno é usado como um monômero na síntese do estireno, que é posteriormente polimerizado para formar o poliestireno, um material amplamente utilizado em embalagens, isolamento térmico e outros produtos.",
      "formula": "C6H10",
      "id": 42,
      "classe": "Cicloalceno"
    },
    {
      "name": "ciclohepteno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=12363",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/12363/png?record_type=2d&image_size=300x300",
      "dad": "Solvente: Em alguns casos, o ciclohepteno pode ser utilizado como um solvente em aplicações específicas. Solventes são substâncias que ajudam a dissolver outras substâncias, formando soluções. No entanto, é importante ressaltar que existem muitos solventes mais comuns e amplamente utilizados disponíveis, e o ciclohepteno pode ter aplicações limitadas nesse contexto.",
      "formula": "C7H12",
      "id": 43,
      "classe": "Cicloalceno"
    },
    {
      "name": "cicloocteno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=638079",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/638079/png?record_type=2d&image_size=300x300",
      "dad": "Síntese química: O cicloocteno pode ser usado como um intermediário na síntese química de outros compostos orgânicos. Por exemplo, ele pode ser utilizado na produção de polímeros, como elastômeros, que são usados em aplicações como vedação, tubos flexíveis e borrachas.",
      "formula": "C8H14",
      "id": 44,
      "classe": "Cicloalceno"
    },
    {
      "name": "benzeno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=241",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=C1C%3DCC%3DCC%3D1&image_size=300x300",
      "dad": "1 - Produção de plásticos e resinas: O benzeno é um componente essencial na produção de uma variedade de plásticos, como o poliestireno e o poliuretano. Ele é usado como matéria-prima para sintetizar diferentes tipos de polímeros e resinas, que são amplamente utilizados em produtos de consumo, como embalagens, utensílios domésticos, eletrônicos e peças automotivas. 2 - Solvente industrial: O benzeno é um solvente extremamente eficaz e é usado em várias indústrias, como a de tintas, vernizes, adesivos e produtos químicos. Ele pode dissolver uma ampla gama de substâncias, tornando-se útil em processos de fabricação e limpeza industrial. No entanto, devido à sua toxicidade, o uso do benzeno como solvente está sendo gradualmente substituído por opções mais seguras. 3 - Combustível: O benzeno também pode ser usado como um componente em combustíveis, especialmente em formulações antigas de gasolina. No entanto, devido aos seus efeitos nocivos à saúde e ao meio ambiente, o teor de benzeno na gasolina foi regulamentado em muitos países para limitar sua emissão e uso.",
      "formula": "C6H6",
      "id": 45,
      "classe": "Aromático."
    },
    {
      "name": "naftaleno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=931",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=C1C2C(%3DCC%3DCC%3D2)C%3DCC%3D1&image_size=300x300",
      "dad": "1 - Repelente de traças: O naftaleno é amplamente conhecido como um repelente de traças. É comum encontrar bolas ou blocos de naftaleno em armários, gavetas e espaços de armazenamento para proteger roupas e tecidos contra a infestação de traças. O odor forte do naftaleno atua como um agente repelente, mantendo as traças afastadas. 2 - Produção de resinas e plásticos: O naftaleno é usado na fabricação de resinas e plásticos. Ele atua como um monômero na produção de polímeros, como a resina de poliéster. Esses materiais são amplamente utilizados em embalagens, fibras têxteis, revestimentos e uma variedade de produtos do cotidiano. 3 - Indústria de explosivos: O naftaleno é usado como um componente na fabricação de explosivos, como a trinitrotolueno (TNT). Ele fornece energia e estabilidade aos explosivos, tornando-os mais eficientes em aplicações industriais, militares e de demolição controlada.",
      "formula": "C10H8",
      "id": 46,
      "classe": "Aromático."
    },
    {
      "name": "tolueno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=1140",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/1140/png?record_type=2d&image_size=300x300",
      "dad": "1 - Indústria farmacêutica: O tolueno desempenha um papel importante na produção de medicamentos e produtos farmacêuticos. É usado como solvente para extrair substâncias ativas de plantas medicinais, além de ser utilizado na síntese de compostos farmacêuticos e na formulação de medicamentos líquidos. 2 - Indústria de fragrâncias e perfumes: O tolueno possui um aroma característico e é utilizado como ingrediente na indústria de fragrâncias e perfumes. Contribui para a criação de fragrâncias agradáveis e intensas em uma ampla variedade de produtos, como perfumes, colônias, sabonetes, loções e produtos de limpeza com fragrância.",
      "formula": "C7H8",
      "id": 47,
      "classe": "Arom\u00e1tico."
    },
    {
      "name": "xileno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=7237",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/7237/png?record_type=2d&image_size=300x300",
      "dad": "Solvente industrial: O xileno é um solvente versátil e amplamente utilizado na indústria. Ele é empregado em processos de revestimentos, tintas, adesivos e resinas. Sua capacidade de dissolver uma ampla variedade de substâncias o torna valioso na formulação de produtos químicos e na limpeza de equipamentos e superfícies.",
      "formula": "C8H10",
      "id": 48,
      "classe": "Arom\u00e1tico"
    },
    {
      "name": "antraceno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=8418",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/8418/png?record_type=2d&image_size=300x300",
      "dad": "1 - Indústria de corantes: O antraceno é usado na produção de corantes e pigmentos. Ele atua como uma matéria-prima para a síntese de corantes têxteis, corantes para impressão, corantes para tintas e corantes sensíveis à luz. Esses corantes são amplamente utilizados na indústria de tecidos, pinturas, impressões e outros produtos coloridos. 2 - Produção de resinas: O antraceno é empregado na fabricação de resinas termoplásticas. Essas resinas são utilizadas em diversos setores, como na produção de adesivos, revestimentos, plásticos, filmes, laminados e compostos de borracha. O antraceno fornece propriedades desejáveis, como resistência química, durabilidade e aderência..",
      "formula": "C14H10",
      "id": 49,
      "classe": "Arom\u00e1tico"
    },
    {
      "name": "metilciclopentano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=7296",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/7296/png?record_type=2d&image_size=300x300",
      "dad": "Solvente: O metilciclopentano pode ser usado como solvente em algumas indústrias. Devido às suas propriedades químicas, é adequado para dissolver certos compostos orgânicos. Pode ser utilizado em processos de extração, limpeza e fabricação de produtos químicos.",
      "formula": "C6H12",
      "id": 50,
      "classe": "Cicloalcano"
    },
    {
      "name": "propileno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=8252",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/8252/png?record_type=2d&image_size=300x300",
      "dad": "Indústria de plásticos: O propileno é amplamente utilizado na indústria de plásticos como uma matéria-prima importante. Ele é utilizado na fabricação de uma ampla variedade de produtos plásticos, incluindo embalagens, recipientes, brinquedos, utensílios domésticos, peças automotivas e muito mais. O propileno é um componente essencial na produção de polipropileno, um dos plásticos mais comuns e versáteis do mercado.",
      "formula": "C3H6",
      "id": 51,
      "classe": "Alceno"
    },
    {
      "name": "isobutileno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=8255",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/8255/png?record_type=2d&image_size=300x300",
      "dad": "Fabricação de plásticos: O isobutileno é usado na produção de diversos tipos de plásticos, como polipropileno, poliuretano e copolímeros de propileno. Esses plásticos são empregados em várias aplicações, incluindo embalagens, revestimentos, isolamentos, calçados e muitos outros produtos de uso cotidiano.",
      "formula": "C4H8",
      "id": 52,
      "classe": "Alceno"
    },
    {
      "name": "heptadieno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=5462716",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=C%3DC%2FC%3DC%2FCCC&image_size=300x300",
      "dad": "Sabor e fragrância: Alguns heptadienos, principalmente os derivados de origem natural, podem ser utilizados na indústria de alimentos e bebidas, bem como na indústria de perfumes e fragrâncias. Esses compostos podem contribuir para a criação de aromas e sabores específicos em produtos como alimentos processados, bebidas, perfumes, cosméticos e produtos de higiene pessoal.",
      "id": 53,
      "classe": "Dieno"
    },
    {
      "name": "nonadieno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=5352755",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=C%3DC%2FC%3DC%2FCCCCC&image_size=300x300",
      "dad": "Indústria de borracha: O nonadieno é utilizado na indústria de borracha como um monômero na produção de elastômeros especiais, como o polibutadieno. O polibutadieno é um polímero com alta elasticidade e resistência ao desgaste, sendo amplamente utilizado em pneus, correias transportadoras, mangueiras e outros produtos de borracha.",
      "id": 54,
      "classe": "Dieno"
    },
    {
      "name": "buta-1,2-dieno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=11535",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/11535/png?record_type=2d&image_size=300x300",
      "dad": "Adesivos e selantes: O buta-1,2-dieno é usado na fabricação de adesivos e selantes devido à sua capacidade de polimerização. Através de reações químicas, o buta-1,2-dieno pode se ligar a outros compostos e formar polímeros adesivos que têm propriedades de aderência e vedação. Esses adesivos e selantes são amplamente utilizados em aplicações industriais e comerciais, como construção, automóveis e eletrônicos.",
      "id": 55,
      "classe": "Dieno"
    },
    {
      "name": "pent-1,4-dieno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=11587",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=C%3DCCC%3DC&image_size=300x300",
      "dad": "1 - Adesivos e selantes: Devido à sua capacidade de se polimerizar e formar ligações cruzadas, o pentadieno é usado na formulação de adesivos e selantes. Esses materiais são amplamente utilizados em construção, indústria automotiva, eletrônicos e outros setores para unir e vedar superfícies. 2 - Produção de fragrâncias: O pentadieno é um componente importante na indústria de fragrâncias. É utilizado na fabricação de fragrâncias sintéticas que são usadas em perfumes, produtos de cuidados pessoais, sabonetes e outros produtos perfumados.",
      "formula": "C5H8",
      "id": 56,
      "classe": "Dieno"
    },
    {
      "name": "hex-1-ino",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=12732",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/12732/png?record_type=2d&image_size=300x300",
      "dad": "Solvente: O hex-1-ino pode ser usado como solvente em algumas aplicações industriais e laboratoriais. Devido à sua polaridade intermediária e à capacidade de dissolver uma variedade de compostos orgânicos, pode ser empregado em processos de extração, limpeza e purificação.",
      "formula": "C6H10",
      "id": 57,
      "classe": "Alquino"
    },
    {
      "name": "dec-1-ino",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=12997",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/12997/png?record_type=2d&image_size=300x300",
      "dad": "Síntese de compostos orgânicos: O decino pode ser usado como uma matéria-prima para a síntese de outros compostos orgânicos. Sua tripla ligação e cadeia carbônica longa oferecem uma plataforma para a construção de moléculas mais complexas. Por meio de reações químicas específicas, o decino pode ser convertido em compostos utilizados na indústria farmacêutica, na fabricação de produtos químicos e em outros campos.",
      "formula": "C10H18",
      "id": 58,
      "classe": "Alquino"
    },
    {
      "name": "cicloheptadieno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=19969",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/19969/png?record_type=2d&image_size=300x300",
      "dad": "Síntese química: O cicloheptadieno é utilizado na indústria química como um intermediário para a síntese de outros compostos. Ele pode ser modificado por meio de reações químicas para obter derivados úteis em diversas aplicações, como na produção de polímeros, corantes e produtos farmacêuticos.",
      "formula": "C7H10",
      "id": 59,
      "classe": "Cicloalceno"
    },
    {
      "name": "ciclooctadieno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=299882",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/299882/png?record_type=2d&image_size=300x300",
      "dad": "Ligante em catálise: O ciclooctadieno é um ligante comumente utilizado em química de coordenação e catálise. Ele pode se coordenar com íons metálicos para formar complexos estáveis, que podem catalisar reações químicas específicas. Esses complexos metálicos contendo ciclooctadieno são frequentemente empregados em sínteses orgânicas e processos industriais.",
      "formula": "C8H12",
      "id": 60,
      "classe": "Cicloalceno"
    },
    {
      "name": "bifenila",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=7095",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/7095/png?record_type=2d&image_size=300x300",
      "dad": "1 - Isolante elétrico: O bifenila foi usado como um isolante elétrico em equipamentos eletrônicos, como transformadores e capacitores. Sua estrutura química proporcionava boas propriedades isolantes, como alta resistência elétrica e estabilidade térmica. 2 - Fluidos térmicos: O bifenila foi empregado como fluido térmico em sistemas de transferência de calor. Sua capacidade de suportar altas temperaturas sem se decompor e suas propriedades de baixa viscosidade e alta estabilidade térmica o tornaram útil em aplicações como aquecedores industriais, trocadores de calor e sistemas de refrigeração.",
      "formula": "C12H10",
      "id": 61,
      "classe": "Aromático"
    },
    {
      "name": "acenafeno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=6734",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/6734/png?record_type=2d&image_size=300x300",
      "dad": "Estudos toxicológicos: Em estudos toxicológicos e de avaliação de riscos ambientais, o acenafeno pode ser utilizado como um composto de referência para entender melhor os efeitos e a toxicidade dos hidrocarbonetos aromáticos em geral. Isso inclui a investigação de sua persistência, bioacumulação e potenciais efeitos adversos em organismos vivos e no meio ambiente.",
      "formula": "C12H10",
      "id": 62,
      "classe": "Aromático"
    },
    {
      "name": "ciclopentadieno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=7612",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/7612/png?record_type=2d&image_size=300x300",
      "dad": "Síntese de compostos organometálicos: O ciclopentadieno é um ligante muito importante na formação de compostos organometálicos. Ele pode formar complexos com metais de transição, como ferro, níquel, cobalto e outros. Esses compostos organometálicos têm diversas aplicações em catálise, síntese de produtos farmacêuticos, polímeros e materiais avançados.",
      "formula": "C5H6",
      "id": 64,
      "classe": "Aromático"
    },
    {
      "name": "isopreno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=6557",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/6557/png?record_type=2d&image_size=300x300",
      "dad": "Borracha natural: O isopreno é o monômero básico para a produção da borracha natural. A borracha natural é amplamente utilizada em uma variedade de produtos, como pneus de veículos, solados de sapatos, correias transportadoras, mangueiras, luvas e muitos outros itens de borracha.",
      "formula": "C5H8",
      "id": 65,
      "classe": "Dieno"
    },
    {
      "name": "butadieno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=7845",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/7845/png?record_type=2d&image_size=300x300",
      "dad": "1 - Borracha sintética: O butadieno é um dos principais componentes utilizados na produção de borracha sintética. A borracha sintética feita a partir do butadieno tem uma ampla gama de aplicações, incluindo pneus de veículos, correias transportadoras, mangueiras, solados de calçados, vedações e muito mais. A borracha sintética é altamente elástica, resistente a impactos e possui boa durabilidade, tornando-se essencial em muitos produtos industriais e de consumo. 2 - Polímeros e plásticos: O butadieno também é utilizado na produção de polímeros e plásticos. É copolimerizado com outros monômeros para produzir polímeros de borracha, como o estireno-butadieno (SBR), que é amplamente utilizado em pneus, calçados esportivos e componentes de automóveis. Além disso, o butadieno é usado na fabricação de polibutadieno, um polímero que apresenta alta resistência ao desgaste e é usado em aplicações como correias transportadoras, esteiras de impressão e revestimentos industriais.",
      "formula": "C4H6",
      "id": 67,
      "classe": "Dieno"
    },
    {
      "name": "metilciclohexano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=7962",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/7962/png?record_type=2d&image_size=300x300",
      "dad": "Solvente: O metilciclohexano é amplamente utilizado como solvente em várias indústrias, como a indústria de tintas, vernizes e adesivos. Ele possui propriedades de dissolução eficientes e é capaz de solubilizar uma ampla gama de substâncias, tornando-o útil em processos de limpeza, desengorduramento e formulações químicas.",
      "formula": "C7H14",
      "id": 68,
      "classe": "Cicloalcano"
    },
    {
      "name": "pentan-2-ino",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=12310",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/12310/png?record_type=2d&image_size=300x300",
      "dad": "Propulsor de foguetes: O pentan-2-ino é usado como um propulsor em foguetes de pequeno porte e em alguns foguetes modelo. Ele é misturado com outros combustíveis e oxidantes para criar a combustão necessária para o lançamento do foguete. No entanto, é importante ressaltar que o pentan-2-ino é geralmente utilizado em contextos especializados e não é amplamente utilizado como combustível em foguetes maiores ou em atividades espaciais comerciais.",
      "formula": "C5H8",
      "id": 69,
      "classe": "Alquino"
    },
    {
      "name": "dodecano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=8182",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/8182/png?record_type=2d&image_size=300x300",
      "dad": "Lubrificante: O dodecano é usado como um lubrificante em várias aplicações industriais. Devido à sua estrutura molecular, ele possui propriedades de lubrificação e redução de atrito. É frequentemente utilizado em máquinas, motores e equipamentos onde é necessário minimizar o desgaste e a fricção.",
      "formula": "C12H26",
      "id": 73,
      "classe": "Alcano"
    },
    {
      "name": "buta-1,3-dieno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=7845",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=C%3DCC%3DC&image_size=300x300",
      "dad": "1 - Indústria de borracha: O butadieno é um dos principais componentes utilizados na fabricação de borracha sintética. É especialmente usado na produção de pneus de alta performance, mangueiras, correias transportadoras e diversos outros produtos de borracha. Sua adição confere à borracha uma maior resistência ao desgaste, flexibilidade e durabilidade. 2 - Indústria de plásticos: O butadieno é utilizado na produção de vários tipos de plásticos, como o polibutadieno e o estireno-butadieno, que são usados em uma ampla gama de produtos. Esses plásticos são empregados na fabricação de brinquedos, utensílios domésticos, embalagens flexíveis, revestimentos e muitos outros produtos.",
      "formula": "C4H6",
      "id": 75,
      "classe": "Dieno"
    },
    {
      "name": "hepta-2,4-dieno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=5367544",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=C%2FC%3DC%2FC%3DC%2FCC&image_size=300x300",
      "dad": "Produtos farmacêuticos: Alguns hidrocarbonetos dienos são usados como blocos de construção na síntese de produtos farmacêuticos. Eles podem ser modificados quimicamente para criar estruturas moleculares específicas que exibem atividades biológicas desejadas, como ação antiviral, antifúngica ou antitumoral.",
      "formula": "C7H12",
      "id": 76,
      "classe": "Dieno"
    },
    {
      "name": "ciclohepta-1,3,5-trieno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=11000",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/11000/png?record_type=2d&image_size=300x300",
      "dad": "1 - Combustível: Embora o benzeno não seja amplamente utilizado como combustível em si, ele é uma parte essencial da gasolina. O benzeno é adicionado à gasolina para melhorar o desempenho do motor, aumentar o índice de octanagem e garantir uma queima mais eficiente. No entanto, a presença de benzeno na gasolina é controlada devido às suas propriedades tóxicas e cancerígenas. 2 - Produtos de consumo: O benzeno é utilizado em uma variedade de produtos de consumo, como solventes, tintas, adesivos, desengraxantes, produtos de limpeza e pesticidas. No entanto, seu uso em muitos desses produtos tem sido reduzido devido às preocupações com a toxicidade e a saúde humana.",
      "formula": "C7H8",
      "id": 78,
      "classe": "Cicloaromático"
    },
    {
      "name": "fenilciclopentano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=136538",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/136538/png?record_type=2d&image_size=300x300",
      "dad": "Matéria-prima na indústria química: Os hidrocarbonetos são utilizados como matéria-prima na produção de uma ampla gama de produtos químicos. Por exemplo, eles podem ser usados para fabricar plásticos, borrachas, fibras sintéticas, produtos farmacêuticos e pesticidas.",
      "formula": "C11H14",
      "id": 79,
      "classe": "Aromático"
    },
    {
      "name": "propilciclohexano",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=15505",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/15505/png?record_type=2d&image_size=300x300",
      "dad": "Solvente industrial: O propilciclohexano pode ser utilizado como solvente em algumas indústrias. Devido às suas propriedades químicas, pode ser empregado na dissolução de certos compostos, como resinas, polímeros ou óleos. Essa função é relevante em processos de fabricação, limpeza de equipamentos industriais ou formulação de produtos químicos.",
      "formula": "C9H18",
      "id": 80,
      "classe": "Cicloalcano"
    },
    {
      "name": "buta-1,2-dieno",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=11535",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/11535/png?record_type=2d&image_size=300x300",
      "dad": "1 - Indústria automotiva: O butadieno é um componente essencial na fabricação de pneus. Ele é usado na produção de borracha sintética que proporciona aderência, durabilidade e resistência a impactos aos pneus de veículos. Além dos pneus, o butadieno também é utilizado em vedações, mangueiras e outros componentes de borracha utilizados na indústria automotiva. 2 - Plásticos e elastômeros: O butadieno é um monômero utilizado na produção de plásticos e elastômeros. Ele é utilizado na fabricação de polibutadieno, um tipo de borracha sintética que possui alta resistência ao desgaste, flexibilidade e capacidade de absorção de impactos. O polibutadieno é utilizado em uma variedade de produtos, incluindo solados de sapatos, correias transportadoras, mangueiras, luvas e muito mais.",
      "formula": "C4H6",
      "id": 81,
      "classe": "Dieno"
    },
    {
      "name": "hepta-2-ino",
      "iframe": "https://embed.molview.org/v1/?mode=balls&cid=14245",
      "img": "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=CC%23CCCCC&image_size=300x300",
      "dad": "Solvente industrial: Alguns hidrocarbonetos alquínicos, como o hept-1-eno e o hept-2-eno, são usados como solventes industriais em diferentes processos de produção, como na indústria química e farmacêutica. Eles podem ser usados para dissolver, diluir ou extrair substâncias em vários processos de fabricação.",
      "formula": "C7H12",
      "id": 82,
      "classe": "Alquino"
    }
  ]

  res.json(molecules);
});

// Rota para outras requisições
app.all('/molecules', (req, res) => {
  res.status(405).json({ error: 'Método não permitido. Permitido apenas GET.' });
});

// Porta para o servidor ouvir
const port = 3000;

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

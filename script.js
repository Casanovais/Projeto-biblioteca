        // Função de pesquisa de aluno (pega os valores fornecidos atraves do nome na base de dados, limpa a cena anterior, e cria uma tabela
        //depois de criar uma tabela faz com que o div não esteja escondido, dai o block (que é por em fila)

        function searchStudent() {
            const studentName = document.getElementById('studentName').value; //basicamente como vais ver não serve para nada a não ser quando backend for implementado
            const Div_Of_Result = document.getElementById('result');
            const studentRecords = document.getElementById('studentRecords');

            // Simulando busca (essa parte precisa ser integrada ao backend depois, deixo com o teu irmãi)
            const exemplos = [
                { Nome: 'Rafael', Data: '2023-01-15', Hora: '15:30' },
                { Nome: 'Migueç', Data: '', Hora: '14:25' },
                { Nome: 'O Idiota', Data: '2023-0305', Hora: '' }
            ];

            studentRecords.innerHTML = '';

            exemplos.forEach(exemplo => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${exemplo.Nome || 'Invalido'}</td>
                    <td>${exemplo.Data || 'Invalido'}</td>
                    <td>${exemplo.Hora || 'Invalido'}</td>
                `;
                studentRecords.appendChild(row);
            });

            Div_Of_Result.style.display = 'block';
        }

        // Função para registrar empréstimo/devolução
        function registerEntry() {
            const student = document.getElementById('student').value;
            const date = document.getElementById('date').value;
            const hora = document.getElementById('hora').value;

            // Aqui é onde o teu irmão tem que ver na base de dados 
            alert(`Registro de ${student} no dia "${date}" e na hora "${hora}" realizado de forma incrivelmente gostosa!`);
        }
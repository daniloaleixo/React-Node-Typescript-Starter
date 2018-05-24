
export enum HTTP_ERRORS {
	HTTP_400 = 'HTTP_400',
	HTTP_500 = 'HTTP_500',
}

export const ERROR_CODES = {
	// Errors to be displayed by client
	AUTH_01_userPasswordIncorrect: 'AUTH_01_userPasswordIncorrect',
	AUTH_02_userAlreadyExists: 'AUTH_02_userAlreadyExists',
	AUTH_03_passwordDoesNotMatch: 'AUTH_03_passwordDoesNotMatch',
	AUTH_04_tokenCorrupted: 'AUTH_04_tokenCorrupted',
	AUTH_05_couldNotLoginWithGoogle: 'AUTH_05_couldNotLoginWithGoogle',
	AUTH_06_couldNotFindTheUser: 'AUTH_06_couldNotFindTheUser',
	AUTH_07_notAllowed: 'AUTH_07_notAllowed',
	AUTH_08_mergeGoogleLogin: 'AUTH_08_mergeGoogleLogin',
	AUTH_09_userAlreadyExistsButNotGoogle: 'AUTH_09_userAlreadyExistsButNotGoogle',
	SYSTEM_01_attemptToCreateMoreThanOneInstance: 'SYSTEM_01_attemptToCreateMoreThanOneInstance',
	SYSTEM_02_inconsistentPayload: 'SYSTEM_02_inconsistentPayload',
	SYSTEM_03_payloadNotValidated: 'SYSTEM_03_payloadNotValidated',
	SYSTEM_04_doNotHasThisProductYet: 'SYSTEM_04_doNotHasThisProductYet',
	INTERNAL_01_internalError: 'INTERNAL_01_internalError',

	// CLIENT ERRORS
	INTERNAL_CLIENT_errorInServerResponse: 'INTERNAL_CLIENT_errorInServerResponse',
	INTERNAL_CLIENT_invalidParameter: 'INTERNAL_CLIENT_invalidParameter',

	// Server Errors
	INTERNAL_COMM_01_doesNotExistThisRequestType: 'INTERNAL_COMM_01_doesNotExistThisRequestType',
	INTERNAL_PRODUCT_01_couldNotFactory: 'INTERNAL_PRODUCT_01_couldNotFactory',
	INTERNAL_USER_01_couldNotFactoryTheUser: 'INTERNAL_USER_01_couldNotFactoryTheUser',
	INTERNAL_USER_02_unknownRole: 'INTERNAL_USER_02_unknownRole',
	INTERNAL_USER_03_unknownPartner: 'INTERNAL_USER_03_unknownPartner',
	INTERNAL_ERROR_01_unknownError: 'INTERNAL_ERROR_01_unknownError',

	// Typeforms Errors
	TYPEFORM_01_unknownForm: 'TYPEFORM_01_unknownForm',

	// Track Structure Errors
	TRACK_STRUCTURE_01_unknownTrack: 'TRACK_STRUCTURE_01_unknownTrack',

	// Product Errors
	PRODUCT_01_unknownProduct: 'PRODUCT_01_unknownProduct'
};


export const ERROR_MESSAGES = {
	// Errors to be displayed by client
	AUTH_01_userPasswordIncorrect: 'Usuário ou senha incorretos',
	AUTH_02_userAlreadyExists: 'Usuário já cadastrado na platarforma',
	AUTH_03_passwordDoesNotMatch: 'As senhas não coincidem',
	AUTH_04_tokenCorrupted: 'Token de autenticação não confere',
	AUTH_05_couldNotLoginWithGoogle: 'Não consegui autenticar com o Google',
	AUTH_06_couldNotFindTheUser: 'Não consegui encontrar o usuário',
	AUTH_07_notAllowed: 'Não autorizado',
	AUTH_08_mergeGoogleLogin: 'Já existe um usuário com esse email cadastrado, deseja mesclar as contas de login?',
	AUTH_09_userAlreadyExistsButNotGoogle: 'Não foi possível entrar com o Google porque já existe um usuário com esse email cadastrado, por favor entre com a conta de email ou mescle as contas para possibilitar o login pelo Google',
	SYSTEM_01_attemptToCreateMoreThanOneInstance: 'Não é possível criar mais de uma instância para este objeto',
	SYSTEM_02_inconsistentPayload: 'O objeto não condiz com o request/response esperado',
	SYSTEM_03_payloadNotValidated: 'Payload ainda não foi validado, não posso prosseguir',
	SYSTEM_04_doNotHasThisProductYet: 'Ainda não possuo esse produto ainda',
	INTERNAL_01_internalError: 'Erro interno',

	// CLIENT ERRORS
	INTERNAL_CLIENT_errorInServerResponse: 'Erro na comunicação com o servidor',
	INTERNAL_CLIENT_invalidParameter: 'Parametros Inválidos',

	// Server Errors
	INTERNAL_COMM_01_doesNotExistThisRequestType: 'Não existe essa request no sistema',
	INTERNAL_PRODUCT_01_couldNotFactory: 'Parâmetro enviado para factory de produtos não corresponde com os possíveis',
	INTERNAL_USER_01_couldNotFactoryTheUser: 'Não consegui encontrar o usuário no DB',
	INTERNAL_USER_02_unknownRole: 'Perfil de usuário não existente',
	INTERNAL_USER_03_unknownPartner: 'Parceiro não existente',
	INTERNAL_ERROR_01_unknownError: 'Error desconhecido no servidor',

	// Typeforms Errors
	TYPEFORM_01_unknownForm: 'Typeform desconhecido',

	// Track Structure Errors
	TRACK_STRUCTURE_01_unknownTrack: 'Trilha não existente',

	// Product Errors
	PRODUCT_01_unknownProduct: 'Produto não existente'
};

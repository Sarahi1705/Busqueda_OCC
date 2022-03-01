CREATE TABLE [dbo].[Busqueda]
(
	[Id_Busqueda] INT IDENTITY (1, 1) NOT NULL,
	[NombreEmpresa] VARCHAR(50) NOT NULL,
	[Total_Vacantes] INT NOT NULL,
	[FechaBusqueda] DATETIME     DEFAULT (getdate()) NOT NULL,
	[Id_Busqueda_Usuario] INT NOT NULL
	CONSTRAINT [PK_Busqueda] PRIMARY KEY CLUSTERED ([Id_Busqueda] ASC)
)

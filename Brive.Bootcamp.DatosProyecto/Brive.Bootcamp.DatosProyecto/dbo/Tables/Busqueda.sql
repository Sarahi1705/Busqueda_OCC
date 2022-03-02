CREATE TABLE [dbo].[Busqueda]
(
	[Id_Busqueda] INT IDENTITY (1, 1) NOT NULL,
	[NombreEmpresa] VARCHAR(50) NOT NULL,
	[Total_Vacantes] INT NOT NULL,
	[FechaBusqueda] DATETIME     DEFAULT (getdate()) NOT NULL,
	[Id_Busqueda_Usuario] INT NOT NULL,
	PRIMARY KEY ([Id_Busqueda]),
	CONSTRAINT [FK_Busqueda] FOREIGN KEY ([(Id_Usuario)]) REFERENCES ([Usuario][[Id_Usuario]])
)
